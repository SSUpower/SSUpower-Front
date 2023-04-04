import React from 'react';
import styled from "styled-components";

function Modal({ isOpen, closeModal }) {
  return (
      <>
      {isOpen && (
        <Wrapper>
          <Button onClick={closeModal}> 창 닫기 </Button>
            <br />
          <Contents> 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          </Contents>
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
  width : 80vw;
  height : 80vh;
  background-color: #fff;
  opacity: 0.9;
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
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  flex : 0 1 0 ;
  
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  color: #ffffff;
  background-color: #dc3545;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    background-color: #c82333;
  }
`;

const Contents = styled.div`
  margin: 0;
  text-align: center;
  width : 70vw;
  height : 70vh;
`;