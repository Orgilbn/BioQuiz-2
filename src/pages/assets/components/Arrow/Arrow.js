import {React, useContext} from "react";
import './Arrow.css'
import { Link } from "react-router-dom";
import { MyContext } from "../../../../Context";
const Arrow = ({text, isToLeft, toWhere}) =>{
    const { isDark } = useContext(MyContext);
    return(
        <div className={`${isToLeft ? "arrow-to-left" : "arrow-to-right"}`}>
            <Link
                to={toWhere}
            >
                <div className={`arrow-outer-wrapper ${isToLeft ? "aowl" : ""}`}>
                    <div className={`regular16 arrow-text ${isDark ? "bright-white-txt" : "black-txt"}  ${isToLeft ? "atl" : "atr"}`}>{text}</div>
                    <div className={`arrow-wrapper  ${isToLeft ? "awl" : "awr"}`}>
                        <div className={`${isDark ? "bright-white-bk" : "black-bk"} ${isToLeft ? "side-line sll" : "side-line slr"}`}></div>
                        <div className={`${isDark ? "bright-white-bk" : "black-bk"} bottom-line`}></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Arrow