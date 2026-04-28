import "./right-content.css"
import left from "../assets/triangle.png"
import user from "../assets/icons8-usuário-homem-com-círculo-100.png"
import { Link } from "react-router-dom"

export const Popup = ({classWord})=>{
    return(
        <div className={`pop-up ${classWord}`}>
            <Link to={"/qrcode"} className="ancoraClass"><span>Entrar como um convidado</span><img src={user} alt="user" /></Link>
            <div className="triangle"><img src={left} alt="" /></div> 
        </div>
    ) 
}