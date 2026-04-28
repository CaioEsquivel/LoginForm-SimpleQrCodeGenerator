import "./InputElement.css"

export const InputElement = ({name, type, ...props})=>{
    return(
        <>             
            <input type={type} className="left-input" placeholder=" " {...props} />
            <span>{name}</span>
        </>
    )
}