import React from 'react';
import styled from "styled-components";
import TempMap from "../../assets/images/TempMap.png"

const ModalContents = () => {

    return (
		<Wrapper>
      <MapImg src={TempMap} />
			<p> 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. </p>
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