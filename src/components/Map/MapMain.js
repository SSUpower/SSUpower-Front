import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KakaoMapScript from "./KakaoMapScript";
import GlobalStyle from "../../fonts/GlobalStyle";
import axios from "axios";
import Navbar from "../Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isUserState, isLoggedInState } from "../state";

const MapMain = () => {
  const [positions, setPositions] = useState([]);
  const [user, setUser] = useRecoilState(isUserState);
  const [loginState, setLoginState] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();
  const userId = user.id;

  useEffect(() => {
    axios
      .post(`https://port-0-ssupower-back-lhe2blhul1sus.sel4.cloudtype.app/map/${userId}/select`)
      .then((response) => {
        console.log(response.data);
        setPositions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (!loginState) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (positions.length > 0) {
      KakaoMapScript({ positions });
    }
  }, [positions]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper>
        <div
          id="myMap"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        ></div>
      </Wrapper>
    </>
  );
};

export default MapMain;

const Wrapper = styled.div`
  position: relative; // 추가
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
`;
