import "./LoginBtn.css"


export const LoginBtn=({img,alt,content, classProp})=>{
    return(
        <button className={classProp} >
            <span>
            <img src={img} alt={alt} />
            </span> 
            {content}</button>
    )
}