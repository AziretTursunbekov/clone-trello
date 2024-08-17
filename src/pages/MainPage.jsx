import React from "react";

import List from "../components/list/List";

import styled from "styled-components";
import Form from "../components/list/Form";

const MainPage = () => {
  return (
    <StyledDiv>
      <List />
      <Form />
    </StyledDiv>
  );
};

export default MainPage;
const StyledDiv = styled.div`
  display: flex;
`;
