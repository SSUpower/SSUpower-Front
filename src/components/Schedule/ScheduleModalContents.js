import React from "react";
import styled from "styled-components";

function ModalContents() {
  let array = [1, 2, 3];

  return (
    <div>
      <Wrapper>
        {array.map((i) => {
          return <p>{i}번 정보관 202호</p>;
        })}
      </Wrapper>
    </div>
  );
}

export default ModalContents;

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
  width: 70vw;
  height: 70vh;
`;
