import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import GlobalStyle from "../../fonts/GlobalStyle";
import Modal from './Modal'; 

function DupModal({ isOpen, closeModal, positionId, classId, positions }) {
    let dupList = [];

    positions.forEach(position => {
        if(positionId === position.buildingId){
            console.log(positionId)
            dupList.push(position);
        }
    });

    const handleMarkerClick = (positionId, classId) => {
        // 모달 팝업 열기
        const modalRoot = document.getElementById('modal-root');
        ReactDOM.render(<Modal isOpen={true} closeModal={() => ReactDOM.unmountComponentAtNode(modalRoot)} positionId={positionId} classId={classId} />, modalRoot);
    };
  
  return (
    <>
      {isOpen && (
        <Wrapper>
          <GlobalStyle />
          <Button onClick={closeModal}> X </Button>
          {dupList.map((item, index) => (
            <ListButton key={index} onClick={() => handleMarkerClick(item.buildingId, item.classID)}> 
                수업명 : {item.object} , 강의실 : {item.classID} 호
            </ListButton>
          ))}
       </Wrapper>
      )}
    </>
  );
}

export default DupModal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20vw;
  height: 20vh;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 20px;
  z-index: 900;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: auto;
  white-space: nowrap;
`;

const Button = styled.button`
  margin-left: auto;
  margin-bottom: 20px;
  padding: none;
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

const ListButton = styled.button`
    border-radius: 20px;
    border: 1px solid #2e3a51;
    background-color: #FFFFFF;
    color: #2e3a51;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    transform: scale(1);
    outline: none;

    &:hover {
        background-color: #6f7687;
        color: #F3F3F3;
        transition: 0.5s;
    }
`
