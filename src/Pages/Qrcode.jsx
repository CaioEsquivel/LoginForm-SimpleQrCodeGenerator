import "../Pages/Qrcode.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LeftTitle } from "../Components/left-title"



export const Qrcode=()=>{

    const [inputValue, setInputValue] = useState('');
    const [qrcodeLink, setQrcodeLink] = useState('');
    const [textContent, setTextContent] = useState('O QrCode aparecerá aqui');
    
    
    const submit = async ()=>{
        const encodedLink = encodeURIComponent(inputValue)
        setQrcodeLink(`https://api.qrserver.com/v1/create-qr-code/?data=${encodedLink}&size=${150}x${150}`)
        await setTimeout(() => {
            setTextContent("Conteudo inválido")
            
        }, 100);



    }
    const deleteQrcode = ()=>{
        setQrcodeLink('')
        setTextContent('O QrCode aparecerá aqui')

    }


    return(
        <div className="container-qrcode">
            <LeftTitle />
            <div className="container-img">
                <p>{textContent}</p>
                <img src={qrcodeLink}  alt="" />
            </div>
            <div className="input-wrapper">
                <input type="text" className="left-input" placeholder=" " required onChange={(e)=>{setInputValue(e.target.value)}} />
                <span>Link ou Texto</span>
            </div>
            <div className="input-button">
                <button onClick={submit}>Criar</button>
                <button onClick={deleteQrcode}>Apagar</button>
                <Link to="/" className="input-link">Fazer login</Link>
            </div>
        </div>
    )
}