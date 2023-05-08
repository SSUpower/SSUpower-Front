import React from 'react';
import styled from "styled-components";
import MapArray from './mapArray';

const ModalContents = ({ ID, classID }) => { 

  let content;
  let mapString

  switch(ID) {
    case 1:
      content = "전산관 ";
      mapString = "";
      break;
    case 2:
      content = "정보과학관";
      mapString = "abbBccCddDA000000000111130Eee1111120eee1111110eee1111190Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111";
      break;
    case 3:
      content = "진리관";
      mapString = "";
      break;
    default:
      content = "위치 정보가 없습니다.";
  }

  return (
    <Wrapper>
      <p>{content} - {classID}호 </p>
      <MapArray string={mapString} row={10} col={10} depth={2} />
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
