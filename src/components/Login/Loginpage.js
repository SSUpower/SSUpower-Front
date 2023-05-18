import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const Login= () => { 
  const test = () => {
    console.log("login!");
  }

  axios.get("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/")
    .then((response) => {
      console.log(response.Id_);
    }) 
    .catch((error) => {
      console.log(error);
    });
    
    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/")
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

return(
  <>
    {test};
  </>
  );
}


function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
    setShowEmailError(false);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    setShowPasswordError(false);
  };

  const postTest = () => {
    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/",{
      email : Email, //아이디 없으면 null
      password : Password, //비밀번호가 빈칸이면 = 0
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  const LoginHandler = () => {
    postTest();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password === "") {
      setShowPasswordError(true);
      return;
    }
    
    if(Email === ""){
      setShowEmailError(true);
    }

  };

  return (
    <LoginWrapper>
      {/* <Navbar /> */}

      <div className="login-page">
        <LoginForm onSubmit={onSubmitHandler}>
          <Label inputW="200px"> Email</Label>
          <Input type="email" value={Email} onChange={onEmailHandler} />
          <Label inputW="200px">Password</Label>
          <Input type="password" value={Password} onChange={onPasswordHandler} />

          <SubmitButton onClick={LoginHandler} >Login</SubmitButton>
        </LoginForm>

        {showPasswordError && <ErrorMessage>Please enter a password</ErrorMessage>}
        {showEmailError && <ErrorMessage> Please enter Email </ErrorMessage>}

        <div style={{ marginTop: "20px" }}>
          아직 회원이 아니신가요? <JoinLink href="/#/Join">회원가입</JoinLink>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default LoginPage;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

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
  margin-bottom: 20px;
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
  margin-top: 10px;
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
    background-color: #fff;
    color: #FF4B2B;
  }

  &:active {
    background-color: #FF4B2B;
    color: #fff;
  }
`;

const JoinLink= styled.a`
    color: blue;
`;

