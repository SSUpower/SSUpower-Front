import React from "react";
import styled from "styled-components";
import Contents from "./ScheduleModalContents";
import ScheduleForm from "./ScheduleModalForm";

function Modal({ isOpen, closeModal, num, onSubmit }) {

  const openContent = (num) => {
    switch (num) {
      case 1:
        return (
          <ScheduleForm onSubmit={onSubmit} />
        );
      case 2:
        return (
          <p> Delete Class </p>
        );
      case 3:
        return (
          <Contents />
        );
      default:
        return <p> Modal Number Error </p>;
    }
  }

  return (
    <>
      {isOpen && (
        <ModalBox>
          <Wrapper>
            <Button onClick={closeModal}> 창 닫기 </Button>
            <br />
            {openContent(num)}
          </Wrapper>
        </ModalBox>
      )}
    </>
  );
}

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  margin-left: auto;
  margin-bottom: 20px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  flex: 0 1 0;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

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
