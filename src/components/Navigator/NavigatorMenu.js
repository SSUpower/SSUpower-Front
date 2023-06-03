import React, {useState} from "react";
import styled from "styled-components";
import NavigatorModal from "./NavigatorModal";

const NavigatorMenu = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>
      {isMenuOpen && (
      <NavigatorModal isOpen = {isMenuOpen} onClick={toggleMenu}ㅇ />
      )}
    </>
  );
}

export default NavigatorMenu;

const HamburgerMenu = styled.div`
  cursor: pointer;
  position: relative;
  padding: 15px;
  display: block;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  transform: translateX(50%);
  z-index: 12;

  @media screen {
    display: block;
    cursor: pointer;
    position: fixed;
    top: -3px;
    right: 30px;
    transform: translateX(50%);

    ${({ isOpen }) =>
      isOpen &&

      `
      div {
        background-color: #333;
      }
    `}
  }
`;

const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: background-color 0.3s ease;
  `;
