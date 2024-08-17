import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderProfile from "./HeaderProfile";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderMenu />
      <HeaderProfile />
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
