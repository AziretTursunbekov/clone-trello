import React from "react";
import styled from "styled-components";

const Cart = ({ cartTitle, id }) => {
  return (
    <AddCardStyle>
      <h2>{cartTitle}</h2>
    </AddCardStyle>
  );
};

export default Cart;
const AddCardStyle = styled.div`
  height: 30px;
  border-radius: 5px;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
  padding-left: 10px;
  
  color: black;
  margin: 10px;
  display: flex;
  align-items: center;
 
`;
