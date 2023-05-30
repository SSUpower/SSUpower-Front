import React from "react";
import styled from "styled-components";
import ModalContents21 from "./building21/ModalContents21";
import ModalContents11 from "./building11/ModalContents11";

function Modal({ isOpen, closeModal, positionId, classId }) {

  let ModalContentsComponent = null;

  switch(positionId) {
    case 19:
      break;
    case 21:
      ModalContentsComponent = ModalContents21;
      break;
    case 11:
      ModalContentsComponent = ModalContents11;
      break;
    default:
      break;
  }
  
  return (
    <>
      {isOpen && (
        <Wrapper>
          <Button onClick={closeModal}> 창 닫기 </Button>
          <br />
          {ModalContentsComponent && <ModalContentsComponent classID={classId} />}
          {! ModalContentsComponent && <p> 준비중 </p>}
       </Wrapper>
      )}
    </>
  );
}

export default Modal;

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
  overflow-y: scroll;
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
