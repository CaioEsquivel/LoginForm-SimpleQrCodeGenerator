import googleIcon from "../assets/google.png"
import appleIcon from "../assets/apple.png"
import { LoginBtn } from "../Elements/LoginBtn";
import { InputElement } from "../Elements/inputElement";
import { LeftForm } from "../Components/left-form";
import { LeftTitle } from "../Components/left-title";
import { RightContent } from "../Components/right-content";
import { Popup } from "../Components/pop-up";
import "./Register.css"


export const RegisterPage = ()=>{
    return(
        <>
            <div className="left-side-container">

                    <Popup classWord="left-popup"/>


                    <LeftTitle />




                    <LeftForm FormName="Registrar" spanContent="Já possui uma conta?" SubmitName="Sign Up" LinkDirection="/" Fields={[
                        <InputElement name="Email" type="email" required />,
                        <InputElement name="Senha" type="password" required minLength={4} maxLength={12} />,
                        <InputElement name="Confirme Senha" type="password" required minLength={4} maxLength={12} />
                    ]} />
  

                <div className="left-footer">

                    <LoginBtn img={googleIcon} alt="google icon" classProp='googleBtn' content="Entrar com a Conta Google" />

                    <LoginBtn img={appleIcon} alt="apple icon" classProp='appleBtn' content="Entrar com a Conta Apple" />




                </div>
            </div>

            <div className="line-decoration"></div>

            <RightContent SpanContent="Conecte o mundo com um simples scan" />

            
        </>
    );
}