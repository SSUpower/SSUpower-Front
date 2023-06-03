import React, { useState } from "react";
import styled from "styled-components";
import MapArray11 from "./mapArray11";

const ModalContents11 = ({ classID }) => {
  const [gate, setGate] = useState([]);
  const [displayMap, setDisplayMap] = useState(false);
  const [useWhat, setUseWhat] = useState(true);
  const [stair, setStair] = useState(false);
  const [elevator, setElevator] = useState(false);

  let content = "진리관";
  let mapString =
    "10mmm11111111111110Mmm1111111111111031111111111111110211111111111111901111111111111111004111111111111110011llkkjjii111110011LlKkJjIi321110000000000000001hHGgfFeEdDcC00001hhggffeeddccBbA9110kkk11111111111110Kkk1111111111111031111111111111110211111111111111101111111111111111004111111111111110011jiijjjjj111110011JiIjjjJj321110000000000000001ggggGFfEeDdCcBbAagggggffeeddccbbaa10hhh11111111111110Hhh1111111111111031111111111111110211111111111111101111111111111111004111111111111110011ggfffeee111110011GgFffEee321110000000000000001ddddDcccCbbbBAaaadddddccccbbbbaaaa";

  const handleClick1 = () => {
    setGate([0, 4, 0]);
    setUseWhat(true);
    setDisplayMap(true);
  };

  const handleClick2 = () => {
    setGate([0, 10, 15]);
    setUseWhat(false);
    setUseWhat(true);
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
      {!displayMap && (
        <>
          <GateButton onClick={handleClick1}> 학생회관쪽 출입구 </GateButton>
          <GateButton onClick={handleClick2}> 분수대쪽 출입구 </GateButton>
        </>
      )}
      {displayMap && useWhat && (
        <>
          <GateButton onClick={handleStair}> 계단 </GateButton>
          <GateButton onClick={handleElevator}> 엘리베이터 </GateButton>
        </>
      )}
      {displayMap && !useWhat && (
        <MapArray11
          string={mapString}
          row={11}
          col={17}
          depth={3}
          gate={gate}
          stair={stair}
          elevator={elevator}
          classID={classID}
        />
      )}
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
