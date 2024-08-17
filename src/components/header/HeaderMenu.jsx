import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import styled from "styled-components";
import { headerMenuConten } from "../../utils/constans/general";
const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <CgMenuGridO color="white" fontSize={40} />
      <section>
        <FaTrello color="white" fontSize={30} />
        <h2>TRELLO</h2>
      </section>
      <article>
        {headerMenuConten.map((menuItem) => (
          <div className="menu-container" key={menuItem.id}>
            <p>{menuItem.title}</p>
            <HiChevronDown />
          </div>
        ))}
      </article>
      <button className="addBtn">Создать</button>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  .addBtn {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 17px;
    color: #fff;
    background-color: gray;
    &:hover {
      background-color: #80808092;
      transition: all 0.09s ease-in-out;
    }
  }
  & > section {
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
  }
  & > article {
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
    margin-left: 20px;
    font-size: 17px;
    .menu-container {
      display: flex;
      align-items: center;
      padding: 4px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: gray;
        transition: all 0.1s ease-in-out;
      }
    }
  }
`;
