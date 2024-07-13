import {React, useState, useEffect, useContext} from "react";
import './HomePage.css'
import '../mainStyles.css'
import { MyContext } from "../../Context";
import { Col, Row} from 'antd';
import QuizPreviewCard from "../assets/components/QuizPreviewCard/QuizPreviewCard";
import QuizCard from "../assets/components/QuizCard/QuizCard";
import Footer from "../assets/components/Footer/Footer";
import Arrow from "../assets/components/Arrow/Arrow";
import MoveableDots from "../assets/components/MoveableDots/MovebleDots";

import wave from '../assets/images/wave-hand.png'
import rightTxt from '../assets/images/Group 26.png'
import rightTxtDark from '../assets/images/group30.png'
import leftTxt from '../assets/images/Group 25.png'
import leftTxtDark from '../assets/images/group31.png'
import bkPhoto1 from '../assets/images/bk-photo-1.png'
import pictureLightMode from '../assets/images/picture-light-mode.jpg'
import pictureDarkMode from '../assets/images/picture-dark-mode.jpg'

import devAntd from '../assets/images/dev-antd.png'
import devArrow from '../assets/images/dev-cute-arrow.png'
import devFigma from '../assets/images/dev-figma.png'
import devFirebase from '../assets/images/dev-firebase.png'
import devGithub from '../assets/images/dev-github.png'
import devReact from '../assets/images/dev-react.webp'

const HomePage = () =>{

    const { isDark, isMongolia, isAnimated } = useContext(MyContext);

    useEffect(() => {
        const squareDot = document.querySelector('.square-dots');
        const textDot = document.querySelector('.text-dots');
    
        const handleDotsMove = () => {
            if (squareDot !== null && textDot !== null) {
                squareDot.style.left = 172 - window.scrollY / 10 + 'px';
                textDot.style.marginTop = window.scrollY / 10 - 40 + 'px';
            }
        };
    
        document.addEventListener('scroll', handleDotsMove);
    
        return () => {
            document.removeEventListener('scroll', handleDotsMove);
        };
    }, []);
    

    const [isWindowSmall, setIsWindowSmall] = useState(false);
    const [gridSpace, setGridSpace] = useState(24);

    useEffect(() => {
        const setScreenSize = () => {
        if (window.innerWidth <= 720) {
            setIsWindowSmall(true)
            setGridSpace(12);
        } else {
            setGridSpace(24);
            setIsWindowSmall(false)
        }
        };

        setScreenSize(); // mount
        window.addEventListener('resize', setScreenSize);

        return () => {
        window.removeEventListener('resize', setScreenSize);
        };
    }, []);

    return(
        <div>
            <div className="bk-photos">
            </div>
            <div className={`main-section-wrapper ${isDark ? "main-section-color-dark ":"main-section-color"}`}>
                <img src={bkPhoto1} alt="bkPhoto1" className="bk-photo-1" ></img>
                <div>
                    <div className="inner-side">
                        {isDark ?
                            <img src={leftTxtDark} alt="leftTxt" className="left-image" style={{ marginLeft: isAnimated ? '0' : '-140px' }}  ></img>
                            :
                            <img src={leftTxt} alt="leftTxt" className="left-image" style={{ marginLeft: isAnimated ? '0' : '-140px' }}  ></img>
                        }
                    </div>
                </div>
                
                <div className={` inner-main ${ isDark ?"inner-main-color-dark" :"inner-main-color"}`}>
                    <div className="inner-left">
                        <div className="welcome">
                            <div className="welcome-emoji">
                                <img src={wave} alt="waving hand" className="emoji"></img>
                            </div>
                            <div className="welcome-text">
                                <div className={`${isDark ? "bright-white-txt" : "black-txt"} welcome-txt ${isWindowSmall ? "h5" : "h3"}`}>
                                    {`${isMongolia ? "Hi сайн уу" : "Hello there!"} ${isWindowSmall ? " 👋" : ""}`}
                                </div>
                                <div style={{marginBottom: 32}}>
                                    <div className={`${isDark ? "bright-white-txt" : "black-txt "} welcome-txt ${isWindowSmall ? "h5" : "h3"}`} >
                                        {isMongolia ? 
                                            <>
                                                <strong className={`${isDark ? "secondary-txt" : "primary-txt"}`}>BioQuiz</strong>-д тавтай морил
                                            </>
                                            :
                                            <>
                                                Welcome to <strong className={`${isDark ? "secondary-txt" : "primary-txt"}`}>BioQuiz</strong>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className= {`${isDark ? "bright-white-txt" : "black-txt "} welcome-txt light16`}>
                                    {isMongolia ? "Та манай вебсайтыг ашиглан биологийн мэдлэгээ бататгах боломжтой." : "You can use our website to reinforce your knowledge of biology."}
                                </div>
                            </div>
                        </div>
                        <div className="quiz-section">
                            <div className="quiz-section-title">
                                <div className={`${isDark ? "bright-white-txt" : "black-txt"}  ${isWindowSmall ? "regular16bold" : "h5"}`}>{isMongolia ? "Өөрийгөө сорих уу?" : "Wanna challange yourself?"}</div>
                                <Arrow text={`${isMongolia ? "Бүгд": "More"}`} isToLeft={false} toWhere={'quizes'}></Arrow>
                            </div>
                            <div>
                                <Row justify="center" gutter={[ gridSpace, gridSpace]}>
                                    <Col>
                                        <QuizCard text='Халууралт' />
                                    </Col>
                                    <Col>
                                        <QuizCard text='Үрэвсэл' />
                                    </Col>
                                    <Col>
                                        <QuizCard text='Эсийн гэмтэл' />
                                    </Col>
                                    <Col>
                                        <QuizCard text='Халууралт' />
                                    </Col>
                                    <Col>
                                        <QuizCard text='Халууралт'/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="inner-right">
                        <div className="rota">
                            <QuizPreviewCard/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inner-side">
                        {isDark ?
                            <img src={rightTxtDark} alt="rightTxt" className="right-image" style={{ right: isAnimated ? '0' : '-140px' }}   ></img>
                            :
                            <img src={rightTxt} alt="rightTxt" className="right-image" style={{ right: isAnimated ? '0' : '-140px' }}   ></img>
                        }
                        
                    </div>
                </div>
                
            </div>


            {/* middle section */}
            <div className={`middle-section-wrapper ${isDark ? "darker-black" :  "bright-white-bk"}`}>
                <div id="squareDots" className="square-dots">
                    <MoveableDots dotColor={`${isDark ? "bright-white-bk" : "black-bk"}`} isText={false}/>
                </div>
                <div className="who-is-bioquiz-for text-section-margin">
                    <div className={`${isDark ? "bright-white-txt" : "black-txt"} ${isWindowSmall ?"h5" : "h4"}`} style={{marginBottom: 32}} >{isMongolia ? "BioQuiz хэнд зориулагдсан бэ?" : "Who is BioQuiz for?"}</div>
                    <div className={`light16 ${isDark ? "bright-white-txt" : "black-txt"}`}>{` ${isMongolia ? "Бид энэхүү вебсайтыг бие даалтынхаа хүрээнд хөгжүүлсэн бөгөөд анагаах ухаанаар суралцдаг оюутнууд болон биологийн мэдлэгээ бататгах мөн суралцах хүсэлтэй хүн бүхэнд нээлттэй." : "We have developed this website as part of our group project, and it is open to medical students and anyone who wants to learn and strengthen their knowledge of biology."}`}</div>
                </div>
                <div className="text-dots">
                    <MoveableDots dotColor={`${isDark ? "pink-bk" : "primary-bk"}`} isText={true}/>
                </div>
            </div>
            <div className="helloThere">
                {isDark ?
                    <img src={pictureDarkMode} alt="pictureLightMode" className="the-picture"></img>
                    :
                    <img src={pictureLightMode} alt="pictureLightMode" className="the-picture"></img>
                }
            </div>
            <div className={`dev-section-wrapper ${isDark ? "darker-black" : "bright-white-bk"}`}>
                {/* here */}
                <Row>
                    <Col flex="auto">
                        <div className="dev-picture-margin-top">
                            <div>
                                <img src={devAntd} alt="antd" className=" dev-back dev-antdd"></img>
                                <img src={devFigma} alt="devFigma" className="dev-back dev-figma"></img>
                            </div>
                            <div>
                                <img src={devGithub} alt="devGithub" className="dev-back dev-gtihub"></img>
                            </div>
                        </div>
                        
                    </Col>
                    <Col flex="650px" className="dev-middle-section">
                        <div className="text-section-margin">
                            <div className={`${isDark ? "bright-white-txt" : "black-txt"} ${isWindowSmall ?"h5" : "h4"}`} style={{marginBottom: 32}}>{isMongolia ? "Хөгжүүлэлт" : "Development"}</div>
                            <div className={`light16 ${isDark ? "bright-white-txt" : "black-txt"}`}>{`${isMongolia ? "Манай вебсайтын код болон дизайн нээлттэй ба та доорх хэсгээс шууд авч ашиглах боломжтой. айхтар мундаг эд биш шүү ххаха" : "We made our website code and design open source and you can use it from below."}`}</div>
                        </div>
                        
                    </Col>
                    <Col flex="auto">
                        <div className="dev-picture-margin-top">
                            <div>
                                <img src={devReact} alt="react" className="dev-back dev-react"></img>
                            </div>
                            <div>
                                <img src={devArrow} alt="arrow" className="dev-back dev-cute-arrow"></img>
                                <img src={devFirebase} alt="devFirebase" className="dev-back dev-fire"></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;