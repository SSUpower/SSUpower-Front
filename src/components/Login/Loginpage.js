import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navigator/Navigator";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from "../state";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [noUser, setNoUser] = useState(null);
  const [wrongPass, setWrongPass] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
    setShowEmailError(false);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    setShowPasswordError(false);
  };

  const login = () => {
    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/",{
      email : Email,
      password : Password,
    })
    .then((response)=> {
      console.log(response);
      if (response.data.id && response.data.email === null){
        console.log("pass error");
        setWrongPass(true);
        setNoUser(false);
      }
      else if (response.data.id){
        setUser(response.data);
        navigate('/');
      }
      else{
        console.log("no user");
        setNoUser(true);
        setWrongPass(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const LoginHandler = () => {
    login();
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
      <Navbar />
      <div className="login-page">
        <LoginForm onSubmit={onSubmitHandler}>
          <Label inputW="200px"> Email</Label>
          <Input type="email" value={Email} onChange={onEmailHandler} />
          <Label inputW="200px">Password</Label>
          <Input type="password" value={Password} onChange={onPasswordHandler} />

          <SubmitButton onClick={LoginHandler} > Login </SubmitButton>

        </LoginForm>

        { noUser && 
          (<ErrorText > 아직 회원이 아니신가요? 
            <JoinLink href="/#/Join">회원가입</JoinLink>
            </ErrorText> 
        )}
        { wrongPass && (<ErrorText style={{color: '#D1180B'}} > 비밀번호가 틀렸습니다. </ErrorText>)}
        
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
  margin-top: 25px;
  text-align: center;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin-bottom: 8px;
  width: 200px;
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
  margin-top: 25px;
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

const ErrorText= styled.div`
  width: 300px;
  margin-top: 20px;
  text-align: center;
`;
