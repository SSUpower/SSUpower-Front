import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import getCellStyle from './getCellStyle';
import findRoute from './findRoute';

const MapArray = ({ string, row, col, depth, classID }) => {

	// 강의실 color
  const [cellStyles, setCellStyles] = useState({});

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
  }, [string, row, col, depth ]);

  // 유효성 검사
  if (!string || !row || !col || !depth ) {
    return <div>Invalid Map</div>;
  }

  // string을 3차원 배열로 변환
  const array3D = Array.from({ length: depth }, (_, d) =>
    Array.from({ length: row }, (_, r) =>
      Array.from({ length: col }, (_, c) => string[d * row * col + r * col + c])
    )
  );

  // findRoute 함수에 array3D를 전달
  const route = findRoute(classID, array3D);

  return (
    <Wrapper>
       <div>
       {route}
      </div>
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
                  {/* ㅤ */}
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
