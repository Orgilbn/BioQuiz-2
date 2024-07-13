import {React, useState, useEffect, useContext} from "react";
import { Col, Row } from 'antd';
import QuizCard from "../assets/components/QuizCard/QuizCard";
import Footer from "../assets/components/Footer/Footer";
import { MyContext } from "../../Context";
import './Quizes.css'
// import '../HomePage/HomePage.css'

import rightTxt from '../assets/images/Group 26.png'
import rightTxtDark from '../assets/images/group30.png'
import leftTxt from '../assets/images/Group 25.png'
import leftTxtDark from '../assets/images/group31.png'
import Arrow from "../assets/components/Arrow/Arrow";

const Quizes = () =>{
    const { isDark, isMongolia } = useContext(MyContext);
    const [isWindowSmall, setIsWindowSmall] = useState(false);
    const [gridSpace, setGridSpace] = useState(24)

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
            <div className={`main-section-wrapper ${isDark ? "main-section-color-dark ":"main-section-color"}`}>
                
            <div className="inner-side">
                        {isDark ?
                            <img src={leftTxtDark} alt="leftTxt" className="left-image"></img>
                            :
                            <img src={leftTxt} alt="leftTxt" className="left-image"></img>
                        }
                </div>
                <div className={` inner-main ${ isDark ?"inner-main-color-dark" :"inner-main-color"}`} style={{flexDirection: 'column'}}>
                    {/* here */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                        <Arrow isToLeft toWhere={'/'} text={`${isMongolia ? "Буцах" : "Back"}`}></Arrow>
                    </div>
                    <div className={`${isDark ? "bright-white-txt": "black-txt"} ${isWindowSmall ? "h5" : "h4"}`} style={{marginTop: 8}}>{isMongolia ? "Асуултууд" : "Quizes"}</div>
                    <div style={{marginTop: 56}}>
                        <Row justify="center" gutter={[gridSpace, gridSpace]}>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                            <Col><QuizCard text={'Балайралт'}/></Col>
                        </Row>
                    </div>
                    <div className="pag-wrapper">
                        <div className="pagination regular16bold">
                            <Arrow isToLeft />
                            <div className="row num-wrapper" style={{fontSize: 20}}>
                                <div className={`${isDark ? "bright-white-txt" : "secondary-txt" }`}>1</div>
                                <div className={`${isDark ? "blured-white-txt" : "black-txt" }`} >2</div>
                                <div className={`${isDark ? "blured-white-txt" : "black-txt" }`}>3</div>
                            </div>
                            <Arrow/>
                        </div>
                    </div>
                    
                </div>
                <div className="inner-side">
                        {isDark ?
                            <img src={rightTxtDark} alt="rightTxt" className="right-image"></img>
                            :
                            <img src={rightTxt} alt="rightTxt" className="right-image"></img>
                        }
                        
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Quizes;