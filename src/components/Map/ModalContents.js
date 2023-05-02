import React from 'react';
import styled from "styled-components";
import TempMap from "../../assets/images/TempMap.png"
import MapArray from './mapArray';

const ModalContents = ({ ID, classID }) => { 

  let content;
  let mapImgSrc;

  switch(ID) {
    case 1:
      content = "전산관 ";
      mapImgSrc = TempMap;
      break;
    case 2:
      content = "정보과학관";
      mapImgSrc = TempMap;
      break;
    case 3:
      content = "진리관";
      mapImgSrc = TempMap;
      break;
    default:
      content = "위치 정보가 없습니다.";
  }

  const str = "abbBccCddDA000000000111110Eee1111110eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg1";

  return (
    <Wrapper>
      {/* <MapImg src={mapImgSrc} /> */}
      <p>{content} - {classID}호 </p>
      <MapArray string={str} row={9} col={10} />
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