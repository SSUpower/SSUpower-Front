import React from 'react';
import styled from "styled-components";
import TempMap from "../../assets/images/TempMap.png"

const ModalContents = ({ ID }) => { 

  let content;

  switch(ID) {
    case 1:
      content = "첫 번째 위치입니다.";
      break;
    case 2:
      content = "두 번째 위치입니다.";
      break;
    case 3:
      content = "세 번째 위치입니다.";
      break;
    default:
      content = "위치 정보가 없습니다.";
  }

  return (
    <Wrapper>
      <MapImg src={TempMap} />
      <p>{content}</p>
    </Wrapper>
  );
}

export default ModalContents;

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
  width : 70vw;
  height : 70vh;
`;

const MapImg = styled.img`
  &:hover{ // 커서 올리면 이미지 커지게
      // transform: scale(1.3);
  }
  width : 60vw;
  /* height : 50vh; */
`;