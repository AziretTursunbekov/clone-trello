import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";


import styled from "styled-components";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const HeaderProfile = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(true);
  };

  const logOutHandler = () => {
    localStorage.removeItem("auth");
    window.location.pathname = "/login";
  };

  return (
    <StyledContainer>
      <input type="text" placeholder="🍳 поиск" />
      <section>
        <MdOutlineNotificationsActive fontSize={25} color="white" />
        <RiInformation2Line fontSize={25} color="white" />
        <CgProfile fontSize={25} color="white" />
        <IoExitOutline
          onClick={handleSubmit}
          fontSize={27}
          color="white"
          cursor={"pointer"}
        />
      </section>

      {open && (
        <Modal>
          {/* Вы точно хотите выйти? */}
          <h1>Чыкпачыыы😭😭😭😭😭</h1>
          <StyledDiv>
            <Button onClick={logOutHandler}>Yes</Button>
            <Button onClick={() => setOpen(false)}>No</Button>
          </StyledDiv>
        </Modal>
      )}
    </StyledContainer>
  );
};

export default HeaderProfile;
const StyledContainer = styled.div`
  display: flex;
  gap: 20px;

  & > input {
    background-color: #333;
    border: 1px solid #fff;
    width: 200px;
    font-size: 18px;
    padding: 0 0 0 5px;
    border-radius: 5px;
    color: #fff;
  }
  & > section {
    display: flex;
    font-size: xx-small;
    gap: 10px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
`;
