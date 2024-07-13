import {React, useContext} from "react";
import './QuizPreviewCard.css'
import '../../../mainStyles.css'
import { MyContext } from "../../../../Context";

const QuizPreviewCard = () => {
    const { isDark } = useContext(MyContext);
    return(
        <div className="gogo">
            <div className="square back">
                <div className="selection">
                    <div className="text-preview black-bk"></div>
                </div>
                <div className={`selection ${isDark ? "secondary-bk" : "primary-bk"}`}>
                    <div className="text-preview black-bk"></div>
                </div>
                <div className="selection gray-bk">
                    <div className="text-preview black-bk"></div>
                </div>
            </div>
            <div className="square front">
                <div className="selection">
                    <div className="text-preview black-bk"></div>
                </div>
                <div className={`selection ${isDark ? "secondary-bk" : "primary-bk"}`}>
                    <div className="text-preview black-bk"></div>
                </div>
                <div className="selection gray-bk">
                    <div className="text-preview black-bk"></div>
                </div>
            </div>
        </div>
        
    )
}

export default QuizPreviewCard;