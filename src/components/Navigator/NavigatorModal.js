import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavigatorModal = ({ isOpen, onClick }) => {
  const [modalWidth, setModalWidth] = useState("250px");
  const isMobile = window.innerWidth < 768; // 768px 이하를 모바일로 간주하고 수정 가능

  useEffect(() => {
    if (isMobile) {
      setModalWidth("50%");
    } else {
      setModalWidth("30%");
    }
  }, [isMobile]);

  return (
    <OverlayWrapper isOpen={isOpen} onClick={onClick}>
      <ContainerWrapper isOpen={isOpen} modalWidth={modalWidth} isMobile={isMobile} />
    </OverlayWrapper>
  );
};

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

export default NavigatorModal;

