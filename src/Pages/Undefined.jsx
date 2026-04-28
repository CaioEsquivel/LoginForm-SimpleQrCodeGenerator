import "./Undefined.css"
import { Link } from "react-router-dom"

export const ErrorPage = ()=>{
    return(
        <div className="errorContainer">
            <h1>Página não encontrada</h1>
            <Link to={"/"} className="link">Voltar para o Login</Link>
        </div>
    )
}