import {React, useContext} from "react";
import { MyContext } from "../../../../Context";
import "./InfiniteScrollingTexts.css"
const InfiniteScrollingTexts = ({isItToLeft, marginVer}) => {
    const {isMongolia } = useContext(MyContext);
    const text = isMongolia ? "BIOQUIZ: ТАНЫ СУРАЛЦАХ ТАЛБАР" : "BIOQUIZ: YOUR PLACE TO LEARN"
    return(
        <div className={`scrollOuterWrapper ${marginVer ? "marginLeftV1" : "marginLeftV2"}`} >
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
            <div className={`scrollWrapper ${isItToLeft ? "animatorL" : "animatorR"}`}>
                <div className="eachText">{text}</div>
            </div>
        </div>
        
    )
}

export default InfiniteScrollingTexts;