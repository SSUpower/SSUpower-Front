import React from 'react';
import styled from "styled-components";

const MapArray = ({ string, row, col }) => {
	// 유효성 검사
  if (!string || !row || !col || row * col !== string.length) {
    return <div>Invalid Map</div>;
  }

  // string을 2차원 배열로 변환
  const array = Array.from({ length: row }, (_, i) =>
    string.slice(i * col, (i + 1) * col).split('')
  );
	
  return (
    <Wrapper>
      {array.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell key={colIndex}>{col}</Cell>
          ))}
          <br />
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export default MapArray;

const Wrapper = styled.div`
  width : 70vw;
  height : 70vh;
  border: 1px solid #ccc;
`;

const Cell = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
`;