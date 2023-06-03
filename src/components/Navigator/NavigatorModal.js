import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState, LoginState } from "../state";
import { useNavigate } from "react-router-dom";

const NavigatorModal = ({ isOpen, onClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const user = useRecoilValue(userState);
  const loginState = useRecoilValue(LoginState);
  const [modalWidth, setModalWidth] = useState("250px");
  const isMobile = window.innerWidth < 768; // 768px 이하를 모바일로 간주하고 수정 가능
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      setModalWidth("50%");
    } else {
      setModalWidth("30%");
    }
  }, [isMobile]);

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <OverlayWrapper isOpen={isOpen} onClick={onClick}>
      <ContainerWrapper
        isOpen={isOpen}
        modalWidth={modalWidth}
        isMobile={isMobile}
      >
        {!loginState && <InfoText> 로그인 해주세요. </InfoText>}
        {loginState && (
          <>
            <InfoText>
              로그인 완료! <br />
              <br />
              {user && (
                <UserInfo>
                  이름: {user.name} <br />
                  이메일: {user.email} <br />
                  <br />
                </UserInfo>
              )}
            </InfoText>
            <LogoutButton onClick={logout}>로그아웃</LogoutButton>
          </>
        )}
      </ContainerWrapper>
    </OverlayWrapper>
  );
};

export default NavigatorModal;

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ContainerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen, modalWidth, isMobile }) =>
    isOpen && isMobile ? `calc(100% - ${modalWidth})` : "70%"};
  width: ${({ modalWidth }) => modalWidth};
  height: 110vh;
  background-color: #fff;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 10;
`;

const InfoText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2e3a51;
  z-index: 11;
  margin-top: 70px;
`;

const UserInfo = styled.div`
  margin-top: 10px;
`;

const LogoutButton = styled.button`
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid #2e3a51;
  background-color: #ffffff;
  color: #2e3a51;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  transform: scale(1);
  outline: none;

  &:hover {
    background-color: #6f7687;
    color: #f3f3f3;
    transition: 0.5s;
  }
`;
