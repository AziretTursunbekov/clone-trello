import React from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <StyledModal  >
      <div>{children}</div>
    </StyledModal>
  );
};

export default Modal;
const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: absolute;
  right: 33%;
  z-index: 10;
  & > div {
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
