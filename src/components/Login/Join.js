import React, { useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import Navbar from "../Navigator/Navigator";

const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  margin: 0;
`;

const Label = styled.label`
  margin: 25px auto 0;
  display: block;
  width: inputW;
  text-align: center;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  margin-bottom: 8px;
  padding: 12px 15px;
  width: 100%;
  text-transform: scale(1.0);
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
`;

const LoginLinkContainer = styled.div`
  margin-top: 20px;
`;

const LoginLinkSpan = styled.span`
  font-weight: normal;
`;

const LoginLink = styled.a`
  text-decoration: underline;
  color: blue;
  font-weight: normal;

`;

const Joinconnect= () => {
 
  const test = () => { 
    console.log("Join!");
  }

    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/join")
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
function Join(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [School, setSchool] = useState("");


  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSchoolHandler = (event) => {
    setSchool(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 같지 않습니다.')
    }

    if(School !== "숭실대학교"){
      return alert('숭실대학교 학생만 가능합니다')
    }

    // postTest();
  };

  const postTest = () => {
    axios.post("https://port-0-red-test-29i2dlhpm04qm.sel4.cloudtype.app/join",{
      name: Name,
      email : Email,
      password : Password,
      ConfirmPassword: ConfirmPassword,
      School: School,
    })
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const JoinHandler = () => {
    postTest();
  };



  return (
    <JoinContainer>
      <Navbar></Navbar>
      <JoinForm onSubmit={onSubmitHandler}>
        <Label>Name</Label>
        <Input type='text' value={Name} onChange={onNameHandler} />

        <Label>Email</Label>
        <Input type='email' value={Email} onChange={onEmailHandler} />

        <Label>Password</Label>
        <Input type='password' value={Password} onChange={onPasswordHandler} />

        <Label>Confirm Password</Label>
        <Input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <Label>School</Label>
        <Input type='school' value={School} onChange={onSchoolHandler} />

        <SubmitButton onClick={JoinHandler}>
          Join
        </SubmitButton>

        <LoginLinkContainer>
            <LoginLinkSpan>이미 계정이 있으신가요? </LoginLinkSpan>
            <LoginLink href="/#/Login">로그인하기</LoginLink>
        </LoginLinkContainer>
      </JoinForm>

    </JoinContainer>
  )
}

export default Join;
