import React from "react";
import './QuizCard.css'

const QuizCard = ({text}) =>{
    return(
        <div className="wrapper">
            <div className="image-sec"></div>
            <div className="regular16bold black-txt bruh">{text}</div>
        </div>
    )
}

export default QuizCard