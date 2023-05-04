import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const MapArray = ({ string, row, col }) => {

	// 강의실 color
  const [cellStyles, setCellStyles] = useState({});

  useEffect(() => {
    const initialStyles = {};
    Array.from({ length: row }, (_, i) =>
      string.slice(i * col, (i + 1) * col).split('')
    ).forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const style = getCellStyle(col);
        initialStyles[`${rowIndex}-${colIndex}`] = style;
      });
    });
    setCellStyles(initialStyles);
  }, [string, row, col]);

  // 유효성 검사
  if (!string || !row || !col || row * col !== string.length) {
    return <div>Invalid Map</div>;
  }

  // string을 2차원 배열로 변환
  const array = Array.from({ length: row }, (_, i) =>
    string.slice(i * col, (i + 1) * col).split('')
  );

  // 각 문자에 대해 색상을 지정하는 함수
  const getCellColor = (char) => {
    switch (char) {
      case 'A':
			case 'a':
        return '#E4BCB1';
      case 'B':
			case 'b':
        return '#FAE39D';
      case 'C':
			case 'c':
        return '#ACBD98';
      case 'D':
      case 'd':
        return '#A2D0DB';
      case 'E':
      case 'e':
        return '#C4B9D0';
      case 'F':
      case 'f':
        return '#FFE5DB';
      case 'G':
      case 'g':
        return '#D0c8B6';
      case '0':
          return '#FAFAFA';
      default:
        return '#272727';
    }
  };

  // 각 셀에 적용할 스타일을 계산하는 함수
  const getCellStyle = (char) => {
    const color = getCellColor(char);
    return { border: `1px solid ${color}`, backgroundColor: color };
  };

  return (
    <Wrapper>
      {array.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={colIndex}
              style={cellStyles[`${rowIndex}-${colIndex}`]}
            >
              {col}
            </Cell>
          ))}
          <br />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MapArray;

const Wrapper = styled.div`
  width : 70vw;
  height : 70vh;
  border: 1px solid #ccc;
`;

const Cell = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;
