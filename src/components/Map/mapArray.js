import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const MapArray = ({ string, row, col, depth }) => {

	// 강의실 color
  const [cellStyles, setCellStyles] = useState({});

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
      case '9':
        return '#515E63';
      case '2':
        return '#DEEFFF';
      case '3':
        return '#CDE2F4';
      case '4':
        return '#C0DFF0';
      default:
        return '#000000';
    }
  };

  // 각 셀에 적용할 스타일을 계산하는 함수
  const getCellStyle = (char) => {
    const color = getCellColor(char);
    return { border: `1px solid ${color}`, backgroundColor: color };
  };

  useEffect(() => {
    const initialStyles = {};
    let index = 0;
    for (let d = 0; d < depth; d++) {
      for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
          const char = string[index];
          const style = getCellStyle(char);
          initialStyles[`${d}-${r}-${c}`] = style;
          index++;
        }
      }
    }
    setCellStyles(initialStyles);
  }, [string, row, col, depth, getCellStyle]);

  // 유효성 검사
  if (!string || !row || !col) {
    return <div>Invalid Map</div>;
  }

  // string을 3차원 배열로 변환
  const array3D = Array.from({ length: depth }, (_, d) =>
    Array.from({ length: row }, (_, r) =>
      Array.from({ length: col }, (_, c) => string[d * row * col + r * col + c])
    )
  );

  return (
    <Wrapper>
      {array3D.map((depth, depthIndex) => (
        <React.Fragment key={depthIndex}>
          {depth.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((col, colIndex) => (
                <Cell
                  key={`${depthIndex}-${rowIndex}-${colIndex}`}
                  style={cellStyles[`${depthIndex}-${rowIndex}-${colIndex}`]}
                >
                  {col}
                </Cell>
              ))}
              <br />
            </React.Fragment>
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
