import React, { useState, useEffect, useContext, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import { Switch, Drawer, Dropdown, Space } from 'antd';
import { GlobalOutlined, UserOutlined, MenuOutlined, MoonOutlined, LogoutOutlined } from "@ant-design/icons";
import DrawerComponent from "../assets/components/DrawerComponent/DrawerComponent";
import { Divider } from 'antd';
import { MyContext } from "../../Context";

const getMenuItems = (setIsMongolia) => [
  {
    key: '1',
    label: 'MN',
    onClick: () => setIsMongolia(true)
  },
  {
    key: '2',
    label: 'ENG',
    onClick: () => setIsMongolia(false)
  },
];
const Layout = () => {
  const { isDark, setIsDark, isMongolia, setIsMongolia, isPageLoaded, setIsPageLoaded, setIsAnimated } = useContext(MyContext);
  const menu = {
    items: getMenuItems(setIsMongolia),
  };

  const [header, setHeader] = useState(true);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [headerPos, setHeaderPos] = useState('16px');
  const [prevScroll, setPrevScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const smoothScrollToTop = (duration) => {
      const startY = 500;
      const endY = 0;
      const distanceY = startY - endY;
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress);
        window.scrollTo(0, startY - distanceY * easing);

        if (timeElapsed < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const handleOnLoad = () => {
      window.scrollTo(0, 500); // Set initial scroll position to 500
      smoothScrollToTop(1500); // Smooth scroll to top over 1.5 seconds (1500 ms)
    };

    setHeaderPos('-60px');

    window.addEventListener('load', handleOnLoad);

    const putBackHeader = () => {
      setHeaderPos('16px');
      setIsPageLoaded(true);

      setTimeout(() => {
        setIsAnimated(true);
      }, 300); // Set isAnimated to true after 0.3 seconds
    };

    const initialTimer = setTimeout(putBackHeader, 1700);

    // Clean up the event listener and timer on component unmount
    return () => {
      window.removeEventListener('load', handleOnLoad);
      clearTimeout(initialTimer);
      setHeaderPos('0px');
    };
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 720) {
      setHeader(false);
      setHeaderPos('0px');
    } else {
      setHeader(true);
      setHeaderPos('16px');
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    if (prevScroll > currentScroll) {
      setHeaderPos(window.innerWidth <= 720 ? '0px' : '16px');
    } else {
      setHeaderPos('-60px');
    }
    setPrevScroll(currentScroll);
    setIsScrolling(true);
  }, [prevScroll]);

  const handleScrollEnd = useCallback(() => {
    if (window.scrollY === 0) {
      setHeaderPos(window.innerWidth <= 720 ? '0px' : '16px');
    }
    setIsScrolling(false);
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize, isPageLoaded]);

  useEffect(() => {
    if (isPageLoaded) {
      document.addEventListener('scroll', handleScroll);
      let timeoutId;
      const scrollListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScrollEnd, 150); // 150ms delay to detect scroll end
      };
      document.addEventListener('scroll', scrollListener);
      return () => {
        document.removeEventListener('scroll', handleScroll);
        document.removeEventListener('scroll', scrollListener);
      };
    }
  }, [handleScroll, handleScrollEnd, isPageLoaded]);

  
// alskdjflkasjdflk
  useEffect(() => {
    const floatingHeader = document.querySelector('.header-wrapper');
    if (floatingHeader) {
      floatingHeader.style.marginTop = headerPos;
    }
  }, [headerPos]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCheck = () => {
    setChecked(!checked);
    setIsDark(!isDark);
  };

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'MN') {
      setIsMongolia(true);
    } else if (selectedOption === 'ENG') {
      setIsMongolia(false);
    }
  };
  
  return (
    <div>
      <div className="outer-wrapper">
        <div className="header-wrapper">
          <div className={`${isDark ?"secondary-txt" : "primary-txt"} h4`}>BioQuiz</div>
          {header ? (
            <div className="row">
              <nav>
                <ul className="row light16 black-txt">
                  <li className="gap">
                    <Link to="/">{isMongolia ? "Нүүр" : "Home"}</Link>
                  </li>
                  <li className="gap">
                    <Link to="/quizes">{isMongolia ? "Асуултууд" : "Quizes"}</Link>
                  </li>
                  <li>
                    <Link to="/quizes">{isMongolia ? "Хуваалцах" : "Share"}</Link>
                  </li>
                </ul>
              </nav>
              <div className="padd18">|</div>
              <div className="row">
                <div className="gap">
                  {/* <GlobalOutlined /> */}
                  <Dropdown
                    placement="bottom"
                    menu={menu}
                  >
                    <Space>
                      <GlobalOutlined />
                    </Space>
                  </Dropdown>
                </div>
                <Switch onChange={handleCheck} checked={checked} />
              </div>
              <div className="padd18">|</div>
              <div>
                <UserOutlined />
              </div>
            </div>
          ) : (
            <div>
              <MenuOutlined onClick={showDrawer} />
              <Drawer
                placement="left"
                closable={true}
                onClose={onClose}
                open={open}
              >
                
                <p><Link to="/">{isMongolia ? "Нүүр" : "Home"}</Link></p>
                <p><Link to="/quizes">{isMongolia ? "Асуултууд": "Quizes"}</Link></p>
                <p><Link to="/quizes">{isMongolia ? "Хуваалцах": "Share"}</Link></p>
                <Divider/>
                <DrawerComponent 
                  title={`${isMongolia ? "Хэл" : "Language"}`} 
                  icon={<GlobalOutlined />} 
                  method={
                    <select name="lang" style={{paddingTop: 5, paddingBottom: 5, paddingRight: 5, paddingLeft: 10}} onChange={handleChange}>
                      <option value="MN" onClick={()=>{console.log('mn clicked')}}>MN</option>
                      <option value="ENG" onClick={()=>{console.log('eng clicked')}}>ENG</option>
                    </select>
                  }/>
                <DrawerComponent title={`${isMongolia ? "Харанхуйн горим" : "Dark mode"}`} icon={<MoonOutlined />} method={<Switch onChange={handleCheck} checked={checked}/> }/>
                <Divider/>
                <DrawerComponent title={`${isMongolia ? "Гарах" : "Leave"}`} icon={<LogoutOutlined />} />

              </Drawer>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
