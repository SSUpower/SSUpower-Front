import React, {useState, useEffect} from "react";
import styled from "styled-components";

const NavigatorItems = ({isMobile}) => {
    const [items, setItems] = useState([]);

	useEffect(() => {
		if (isMobile) setItems(["지도", "시간표"]);
		else setItems(["지도", "시간표", "Login", "Join"]);
	}, [isMobile])

	return (
		<NavItems>
			{items.map((item) => (
				<NavItem key={item}>{item}</NavItem>
			))}
		</NavItems>
	);
}

export default NavigatorItems;

const NavItems= styled.div`
  display: flex;
  // pisition: fixed;
  align-items: center;
  margin-left: auto;
  padding:0px 20px 0px 20px; 

  @media screen  {
    position: relative; 
    margin-left: 0;
  }
  
`;

const NavItem = styled.div`
  margin-right: 20px; 
  cursor: pointer;
  color: #fff;
  &:hover{
        color: #6f7687;
  }
`;
