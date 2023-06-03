import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavigatorLogo = ({ isMobile }) => {
  const [text, setText] = useState("강의가 듣고 싶어서");

  useEffect(() => {
    if (isMobile) setText("SSU");
    else setText("강의가 듣고 싶어서");
  }, [isMobile]);

  return (
    <Logo>
      <LogoText> {text} </LogoText>
    </Logo>
  );
};

export default NavigatorLogo;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 16px;
  color: #fff;
  margin-left: 0px;
`;
