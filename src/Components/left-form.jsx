import "./left-form.css"
import { Link } from "react-router-dom"


export const LeftForm = ({FormName,SubmitName,spanContent,LinkDirection,Fields})=>{
    return(
        <div className="left-form-container">

            <h2>{FormName}</h2>
            <form className="left-form" onSubmit={(e) => e.preventDefault()}>

                {Fields.map((field,index)=>(
                    <div className="left-input-container" key={index} >{field}</div>    
                ))}

                <input type="submit" className="submit" value={SubmitName} />

                <div className="span-container">
                <span>{spanContent}</span>
                <div className="span-link">
                    <Link to={LinkDirection} className="left-link">clique aqui</Link> 
                    <div className="span-underline"></div>
                </div>
                </div>
            </form>
        </div>
    )
}

