import React from "react";
import styled from "styled-components";
import MapArray21 from "./mapArray21";

const ModalContents21 = ({ classID }) => {
  let content = "정보과학관";
  let mapString =
    "abbBccCddDA000000000111130Eee1111120eee1111110eee1111190Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111";

  return (
    <Wrapper>
      <p>
        {content} - {classID}호{" "}
      </p>
      <MapArray21
        string={mapString}
        row={10}
        col={10}
        depth={6}
        classID={classID}
      />
    </Wrapper>
  );
};

export default ModalContents21;

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
  width: 70vw;
  height: 70vh;
`;
