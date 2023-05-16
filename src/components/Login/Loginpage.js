import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navigator/Navigator";
import axios from 'axios';

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log('Email', Email);
    console.log('Password', Password);
  };

  const postTest = () => {
    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/",{
      email : "mingi@naver.com",
      password : "1234",
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

  return (
    <LoginWrapper>
      <Navbar />

      <div className="login-page">
        <LoginForm onSubmit={onSubmitHandler}>
          <Label inputW="200px"> Email</Label>
          <Input type="email" value={Email} onChange={onEmailHandler} />
          <Label inputW="200px">Password</Label>
          <Input type="password" value={Password} onChange={onPasswordHandler} />

          <SubmitButton onClick={LoginHandler} >Login</SubmitButton>
        </LoginForm>

        <div style={{ marginTop: "20px" }}>
          아직 회원이 아니신가요? <JoinLink href="/#/Join">회원가입</JoinLink>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default LoginPage;

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
  border: 1px solid #2e3a51;
  background-color: #2e3a51;
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
    color: #2e3a51;
  }

  &:active {
    background-color: #2e3a51;
    color: #fff;
  }
`;

const JoinLink= styled.a`
    color: blue;
`;

