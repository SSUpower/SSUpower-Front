import React, { useState } from "react";
import styled from "styled-components";
import MapArray21 from "./mapArray21";

const ModalContents21 = ({ classID }) => {
  const [gate, setGate] = useState([]);
  const [displayMap, setDisplayMap] = useState(false);
  const [mapString, setMapString] = useState("");
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [depth, setDepth] = useState(0);
  const [base, setBase] = useState(0);
  const [useWhat, setUseWhat] = useState(true);
  const [stair, setStair] = useState(false);
  const [elevator, setElevator] = useState(false);

  let content = "정보과학관";

  const handleClick1 = () => {
    setGate([0, 5, 4]);
    setMapString("abbBccCddDA000000000111130Eee1111120eee1111110eee1111190Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111");
    setRow(10); setCol(10); setDepth(6); setBase(0);
    setUseWhat(true);
    setDisplayMap(true);
  };

  const handleClick2 = () => {
    setGate([0, 8, 9]);
    setMapString("1111111111111111111111111111111111111111111111111111111111111111111111111111111100000000091111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111190Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111abbBccCddDA000000000111130Eee1111120eee1111110eee1111110Fff1111110fff1111110Ggg1111110ggg11111104111");
    setRow(10); setCol(10); setDepth(7); setBase(1);
    setUseWhat(false);
    setElevator(true); // 지하일때는 엘리베이터만 이용가능
    setDisplayMap(true);
  };

  const handleStair = () => {
    setStair(true);
    setUseWhat(false);
  };

  const handleElevator = () => {
    setElevator(true);
    setUseWhat(false);
  };

  return (
    <Wrapper>
      <p>
        {content} - {classID}호{" "}
      </p>
      {
        !displayMap &&
        <>
          <GateButton onClick={handleClick1}> 1층 출입구 </GateButton>
          <GateButton onClick={handleClick2}> B1층 출입구 </GateButton>
        </>
      }
      {
        displayMap && useWhat &&
        <>
          <GateButton onClick={handleStair}> 계단 </GateButton>
          <GateButton onClick={handleElevator}> 엘리베이터 </GateButton>
        </>
      }
      { displayMap && !useWhat &&
        <MapArray21
          string={mapString}
          row={row}
          col={col}
          depth={depth}
          base={base}
          gate={gate}
          stair={stair}
          elevator={elevator}
          classID={classID}
        />
      }
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

const GateButton = styled.button`
  border-radius: 20px;
  border: 1px solid #2e3a51;
  background-color: #2e3a51;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin: 10px;
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
