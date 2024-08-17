import React from "react";
import { useSelector } from "react-redux";
import TreloItem from "./TreloItem";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const List = () => {
  const { trelo } = useSelector((store) => store.trello);

  return (
    <ListTrello>
      {trelo?.map((item) => (
        <>
          {/* <BsThreeDots /> */}
          <TreloItem key={item.id} {...item} />
        </>
      ))}
    </ListTrello>
  );
};

export default List;

const ListTrello = styled.ul`
  display: flex;
  scrollbar-width: calc();
  /* overflow: scroll; */

  color: aliceblue;
  margin-top: 15px;
`;
