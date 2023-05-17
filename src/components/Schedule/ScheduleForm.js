import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./ScheduleModal";

function ScheduleForm({ onSubmit }) {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const handleClick1 = () => {
    setModalOpen1(true);
  };

  const handleClick2 = () => {
    setModalOpen2(true);
  };

  const handleClick3 = () => {
    setModalOpen3(true);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick1}>수업 추가하기</Button>
      <Button onClick={handleClick2}>수업 삭제하기</Button>
      <Button onClick={handleClick3}>빈 강의실 추천 받기</Button>

      {modalOpen1 && (
        <Modal isOpen={modalOpen1} closeModal={() => setModalOpen1(false)} num={1} onSubmit={onSubmit} />
      )}

      {modalOpen2 && (
        <Modal isOpen={modalOpen2} closeModal={() => setModalOpen2(false)} num={2} onSubmit={onSubmit} />
      )}

      {modalOpen3 && (
        <Modal isOpen={modalOpen3} closeModal={() => setModalOpen3(false)} num={3} onSubmit={onSubmit} />
      )}
    </Wrapper>
  );
}

export default ScheduleForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-family: "ChosunGu";
  padding-top: 50px;
  margin: 20px auto;
  width: 100%;
`;

const Button = styled.button`
  background-color: #2e3a51;
  color: white;
  padding: 8px 8px;
  margin-left: 8px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: "ChosunGu";

  color: #ffffff;
  background-color: #2e3a51;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    background-color: #6f7687;
  }
`;