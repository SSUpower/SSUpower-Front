import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavigatorItems = ({isMobile}) => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

	useEffect(() => {
		if (isMobile) setItems(["지도", "시간표"]);
		else setItems(["지도", "시간표", "Login", "Join"]);
	}, [isMobile])

  const handleItemClick = (item) => {
    // 원하는 링크로 이동하는 로직을 작성합니다.
    switch (item) {
      case "지도":
        navigate("/map");
        break;
      case "시간표":
        navigate("/schedule");
        break;
      case "Login":
        navigate("/login");
        break;
      case "Join":
        navigate("/join");
        break;
      default:
        break;
    }
  };

	return (
		<NavItems>
			{items.map((item) => (
				<NavItem key={item} onClick={() => handleItemClick(item)}>
        {item}
      </NavItem>
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
