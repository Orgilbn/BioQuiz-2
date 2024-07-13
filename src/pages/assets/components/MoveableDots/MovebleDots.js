import React from "react";
import './MoveableDots.css'
import EachDot from "./EachDot";
const MoveableDots = ({dotColor, isText}) =>{
    return(
        <div className="DotsOuterWrapper">
            {isText ? 
                <div className="DotsWrapper">
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot ></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot  isText={true}></EachDot>
                        <EachDot  isText={true}></EachDot>
                        <EachDot  isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot dotColor={dotColor} isText={true}></EachDot>
                        <EachDot isText={true}></EachDot>
                    </div>
                </div>
            
            
             : 
             <div className="DotsWrapper">
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                    <div className="eachColumn">
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                        <EachDot dotColor={dotColor}></EachDot>
                    </div>
                </div>
             }
        
        </div>
    )
}

export default MoveableDots;