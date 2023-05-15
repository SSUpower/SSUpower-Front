import React, {useState} from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";


const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FF4B2B;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 10px; 
  // justify-content: space-between;
  width: 100%;
  flex-direction: row;


  // & > div:nth-child(1),
  // & > div:nth-child(2),
  // & > div:nth-child(3),
  // & > div:nth-child(4){
  //     cursor: pointer;
  //     color: #fff;
  //     transition: color 0.2s ease-out;
  //     &:hover{
  //         color: #333;
  //     }
  // }
`;
const NavItems= styled.div`
  display: flex;
  align-items: center
  margin-left: auto;
  padding 0px 10px 0px 10px; 
  margin-left: relative;
`;

const NavItem = styled.div`
  margin-right: 20px; 
  position: relative;
  // padding-left: 0;
  //flex-direction: column;
  cursor: pointer;
  color: #fff;
  // margin: 5px 0px 5px 0px;
  // transition: color 0.2s ease-out;
  // display: block;
  &:hover{
        color: #333;
  }
  }
`;

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
      background-color: #FF4B2B;
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

const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 70px;
  position: relative;
  flex-direction: row-reverse;
`;

const SearchInput = styled.input`
  background-color: #ffffff;
  border: none;
  margin-right: 8px;
  width: 150px;
  border-radius: 30px;
  padding: 5px 5px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};


  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 5px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-weight: bold;
  padding: 8px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.2ms ease-in;
  transform: scale(1.0);
  outline: none;

  svg { 
    font-size: 15px;
  }

  &:hover {
    background-color: #fff;
    color: #FF4B2B;
  }

  &:active {
    background-color: #FF4B2B;
    color: #fff;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0; 
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10; 
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 50%;
  transform: translateX(${({ isOpen }) => (isOpen ? "100%" : "0%")});
  transition: transform 0.3s ease-in-out;
`;

const Lesson = styled.div`
  display: flex;
`;

const NextLesson = styled.div`
  cursor: pointer;
  margin-left: 20px; 
  display: flex; 
  color: #fff;
  position: absolute; 
  font-size: 16px;
  // display: flex; 
  align-itmes: center;
  // justify-content: center;
  flex-direction: row; 
  padding: 10px 10px;
  transform: translateX(100%);
  // margin-left: auto;
  // padding-left: 0;


  &: hover {
    color: #333;
  }
  
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 16px;
  color: #fff;
  margin-left: 0px;
`;

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };


return (
  <>
    <NavbarContainer>
      <Logo>
        <LogoText>강의가 듣고싶어서</LogoText>
      </Logo>

      <NavItems>
        <NavItem>지도</NavItem>
        <NavItem>Home </NavItem>
        <NavItem> 시간표 </NavItem>
      </NavItems>
    

      <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>

      <Search>
        <SearchInput type="text" placeholder=" 검색어를 입력하세요" isOpen={isSearchOpen}/>
        <SearchButton type="submit" onClick={handleSearchClick}>
          <AiOutlineSearch />
        </SearchButton>
      </Search>


      <Lesson> 
        <NextLesson> 다음수업 </NextLesson>
      </Lesson>s

    </NavbarContainer>
    <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
  </>
);
};

export default Navbar;
