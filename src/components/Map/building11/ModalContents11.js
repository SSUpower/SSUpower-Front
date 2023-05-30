import React from "react";
import styled from "styled-components";
import MapArray11 from "./mapArray11";

const ModalContents11 = ({ classID }) => {
  let content = "진리관";
  let mapString = "";

  return (
    <Wrapper>
      <p>
        {content} - {classID}호{" "}
      </p>
      <MapArray11
        string={mapString}
        row={10} //수정
        col={10} //수정
        depth={5}
        classID={classID}
      />
    </Wrapper>
  );
};

export default ModalContents11;

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
  width: 70vw;
  height: 70vh;
`;
