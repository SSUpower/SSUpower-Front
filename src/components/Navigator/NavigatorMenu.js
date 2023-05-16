import React, {useState} from "react";
import styled from "styled-components";

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
			<Overlay isOpen = {isMenuOpen} onClick={toggleMenu} />
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
      background-color: #2e3a51;
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

const Overlay = styled.div`
  position: fixed;
  display: fixed;
  top: 0;
  left: 0; 
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 70%;
  transform: translateX(${({ isOpen }) => (isOpen ? "0%" : "100%")});
  transition: transform 0.3s ease-in-out;
`;
