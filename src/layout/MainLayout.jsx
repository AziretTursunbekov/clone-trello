import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import MainPage from "../pages/MainPage";

import styled from "styled-components";

const MainLayout = () => {
  return (
    <StyledDiv>
      <Header />
      <main>
        <Outlet />
        <MainPage />
      </main>
    </StyledDiv>
  );
};

export default MainLayout;
const StyledDiv = styled.div`
  header {
    /* position: fixed; */
    z-index: 1;
  }
  & > main {
    /* margin-top: 20px; */
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center;
    overflow-x: scroll;
  }
`;
