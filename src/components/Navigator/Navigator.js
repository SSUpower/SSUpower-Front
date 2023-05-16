import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NavigatorLogo from "./NavigatorLogo";
import NavigatorItems from "./NavigatorItems";
import NavigatorMenu from "./NavigatorMenu";
import NavigatorSearch from "./NavigatorSearch";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  right: 0;
  background-color: #2e3a51;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 10px; 
  width: 100%;
  flex-direction: row;
  z-index: 999;
`;

// const Lesson = styled.div`
//   display: flex;
// `;

// const NextLesson = styled.div`
//   cursor: pointer;
//   margin-left: 20px; 
//   display: flex; 
//   color: #fff;
//   position: absolute; 
//   font-size: 16px;
//   align-itmes: center;
//   flex-direction: row; 
//   padding: 10px 10px;
//   transform: translateX(100%);
//   // margin-left: auto;
//   // padding-left: 0;


//   &: hover {
//     color: #333;
//   }
  
// `;

function Navbar(){
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobile, setiIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (innerWidth < 510) setiIsMobile(true);
    else setiIsMobile(false);
  }, [innerWidth, isMobile]);

return (
  <>
    <NavbarContainer>
      <NavigatorLogo isMobile={isMobile} />
      <NavigatorItems isMobile={isMobile} />
      <NavigatorMenu />
      <NavigatorSearch />
  
      {/* <Lesson> 
        <NextLesson> 다음수업 </NextLesson>
      </Lesson> */}
    </NavbarContainer>
  </>
);
};

export default Navbar;
