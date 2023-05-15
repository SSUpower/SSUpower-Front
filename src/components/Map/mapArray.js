import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import getCellStyle from './getCellStyle';
import findRoute from './findRoute';

const MapArray = ({ string, row, col, depth, classID }) => {

	// 강의실 color
  const [cellStyles, setCellStyles] = useState({});
  const [mapstring, setMapstring] = useState(string);

  useEffect(() => {
    const initialStyles = {};
    let index = 0;
    for (let d = 0; d < depth; d++) {
      for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
          const char = mapstring[index];
          const style = getCellStyle(char);
          initialStyles[`${d}-${r}-${c}`] = style;
          index++;
        }
      }
    }
    setCellStyles(initialStyles);
  }, [mapstring, row, col, depth ]);

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
  const routes = findRoute(classID, array3D);

  const render = (routes) => {
    let modifiedString = string; 
    let index = 0;
    const interval = setInterval(() => {
      if (index >= routes.length) {
        clearInterval(interval);
        return;
      }
      const [depth, row, col] = routes[index];
      modifiedString = modifiedString.substring(0, depth * 100 + row * 10 + col) + '%' + modifiedString.substring(depth * 100 + row * 10 + col + 1);
      setMapstring(modifiedString);
      index++;
    }, 500);
  };
  
  const handleClick = () => {
    render(routes);
  };

  const currentMap = array3D[0];

  return (
    <Wrapper>
       <div>
       <button onClick={handleClick}> Render </button>
      </div><br />
          {currentMap.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((col, colIndex) => (
                <Cell
                  key={`${0}-${rowIndex}-${colIndex}`}
                  style={cellStyles[`${0}-${rowIndex}-${colIndex}`]}
                >
                  {col}
                  {/* ㅤ */}
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