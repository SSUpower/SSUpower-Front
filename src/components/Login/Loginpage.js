import React, { useState } from "react"
import styled from "styled-components"

const LoginWrapper = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 100%; 
    height: 100vh;
    `;

const LoginForm = styled.form`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    font-weight: bold; 
    margin-bottom: 10px;
    `;

const Label = styled.label` 
    display: block; 
    width: inputW;
    margin: 25px auto 0; 
    text-align: center;
    `;

const Input = styled.input`
    background-color: #eee; 
    border: none; 
    padding: 12px 15px; 
    margin-bottom: 8px;
    width: 100%;
    border-radius: 20px;
    `;

const SubmitButton = styled.button`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    transform: scale(1.0);
    outline: none;

    &:hover {
    background-color: #FF4B2B;
    }
`;

function LoginPage() {
//이메일, 비밀번호 칸 비워두기
const [Email, setEmail] = useState("") //eslint-disable-line no-unused-vars
const [Password, setPassword] = useState("") //eslint-disable-line no-unused-vars

const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)

}

const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

const onSubmitHandler = (event) => {
    event.preventDefault();

    //사용자의 이메일, 비밀번호를 저장 
    console.log ('Email',Email)
    console.log ('Password',Password)

}
return (
    <LoginWrapper>
        <div className="login-page">
            <LoginForm onSubmit={onSubmitHandler}>

                <Label inputW="200px"> Email</Label>
                <Input type="email" value={Email} onChange={onEmailHandler} />

                <Label inputW="200px">Password</Label>
                <Input type="password" value={Password} onChange={onPasswordHandler} />

            </LoginForm>
        </div>
    
        <LoginForm style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
            <br />
            <SubmitButton>
                Login
            </SubmitButton>
        </LoginForm>

        <div style={{marginTop: "20px"}}>
            아직 회원이 아니신가요? <a href="/#/Join">회원가입</a> 
        </div>
    </LoginWrapper>
)
}

export default LoginPage


