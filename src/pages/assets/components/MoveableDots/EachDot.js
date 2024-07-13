import React from "react";
import './EachDot.css'

const EachDot = ({dotColor, isText}) =>{
    return(
        <div className={`${isText === true ? "EachDot2": "EachDot"} ${dotColor}`}></div>
    )
}

export default EachDot;