import background from "../assets/photo.png"
import { Popup } from "./pop-up"

import "./right-content.css"

export const RightContent = ({SpanContent}) =>(
    <div className="right-side-container">

        <img className="right-img" src={background} alt="" />
        <div className="right-text">
            <span>{SpanContent}</span>
            
                <Popup /> 

        </div>
    </div> 
) 