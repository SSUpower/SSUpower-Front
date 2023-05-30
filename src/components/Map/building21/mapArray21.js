import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getCellStyle from "../getCellStyle";
import findRoute from "./findRoute";

const MapArray21 = ({ string, row, col, depth, base, gate, stair, elevator, classID }) => {
  const [cellStyles, setCellStyles] = useState({});
  const [mapstring, setMapstring] = useState(string);
  const [renderDepth, setRenderDepth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobile, setiIsMobile] = useState(30);
  const [isrender, setIsRender] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (innerWidth < 510) setiIsMobile(20);
    else setiIsMobile(30);
  }, [innerWidth, isMobile]);

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
  }, [mapstring, row, col, depth]);

  // 유효성 검사
  if (!string || !row || !col || !depth) {
    console.log(string, row, col, depth)
    return <div>Invalid Map</div>;
  }

  // string을 3차원 배열로 변환
  const array3D = Array.from({ length: depth }, (_, d) =>
    Array.from({ length: row }, (_, r) =>
      Array.from({ length: col }, (_, c) => string[d * row * col + r * col + c])
    )
  );

  // findRoute 함수에 array3D를 전달
  const routes = findRoute(classID, gate, base, stair, elevator, array3D);

  const render = (routes) => {
    let modifiedString = string;
    let index = 0;
    const interval = setInterval(() => {
      if (index >= routes.length) {
        clearInterval(interval);
        setIsRender(false);
        return;
      }
      const [depth, row, col] = routes[index];
      modifiedString =
        modifiedString.substring(0, depth * 100 + row * 10 + col) +
        "%" +
        modifiedString.substring(depth * 100 + row * 10 + col + 1);
      setMapstring(modifiedString);
      setRenderDepth(depth);
      index++;
    }, 500);
  };

  const handleClick = () => {
    if (!isrender) {
      setIsRender(true);
      render(routes);
    }
  };

  const currentMap = array3D[0];

  const Cell = styled.div`
    display: inline-block;
    width: ${isMobile}px;
    height: ${isMobile}px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    font-family: "Noto Sans KR", sans-serif;
  `;

  return (
    <Wrapper>
      <br />{" "}
      <div>
        <RenderButton onClick={handleClick}> Render </RenderButton>
      </div>
      <div>
        <RenderText>
          {base === 0 ? (
            `[ ${renderDepth + 1} 층 ]`
          ) : (
            <>
              {renderDepth === 0 ? (
                <span>B1 층</span>
              ) : (
                <span>[ {renderDepth} 층 ]</span>
              )}
            </>
          )}
        </RenderText>
      </div>
      {currentMap.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={`${renderDepth}-${rowIndex}-${colIndex}`}
              style={cellStyles[`${renderDepth}-${rowIndex}-${colIndex}`]}
            >
              {/* {col} */}ㅤ
            </Cell>
          ))}
          <br />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MapArray21;

const Wrapper = styled.div`
  width: 70vw;
  height: 70vh;
  font-family: "ChosunGu";
`;

const RenderButton = styled.button`
  border-radius: 20px;
  border: 1px solid #2e3a51;
  background-color: #2e3a51;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  transform: scale(1);
  outline: none;

  &:hover {
    background-color: #6f7687;
    transition: 0.5s;
  }

  &:active {
    background-color: #fff;
    color: #2e3a51;
  }
`;

const RenderText = styled.p`
  color: #2e3a51;
  font-family: "ChosunGu";
  font-size: 15px;
  font-weight: bold;
`;
