import React, { useState } from "react";
import Button from "../UI/Button";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/slices/TrelloSlice";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [trelloValue, setTrelloValue] = useState("");

  const dispatch = useDispatch();
  const { trelo } = useSelector((store) => store.trello);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTrelloValue(e.target.value);
  };

  const handleAdd = () => {
    const newValue = {
      title: trelloValue,
      id: Date.now().toString(),
      newTrello: [],
    };
    if (trelloValue.trim() === "") {
      return alert("Заполните поле!!!");
    }
    dispatch(addList(newValue));
    setTrelloValue("");
  };

  return (
    <ContainerDiv>
      {open ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ввести загаловок списка"
            onChange={handleChange}
            value={trelloValue}
          />
          <ButtonClose>
            <Button type="submit" onClick={handleAdd}>
              Добавить список
            </Button>
            <GrClose
              onClick={() => setOpen(false)}
              style={{ cursor: "pointer", color: "black" }}
            />
          </ButtonClose>
        </form>
      ) : (
        <ButtonAdd>
          <Button onClick={() => setOpen(!open)}>
            {trelo.length < 1
              ? "Добавить карточку"
              : " Добавить еще одну карточку"}
          </Button>
        </ButtonAdd>
      )}
    </ContainerDiv>
  );
};

export default Form;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: aliceblue;
  margin-top: 40px;
  margin-left: 20px;

  form {
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 15px;
    padding: 5px;
    border: 1px solid;
    background-color: #fff;
    border-radius: 15px;

    input {
      width: 200px;
      height: 40px;
      background-color: #fdf9f9;
      border: none;
      border: 1px solid black;
      font-size: 18px;
      color: black;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;
const ButtonAdd = styled("div")`
  button {
    outline: 0;
    margin-left: 40px;
    cursor: pointer;
    width: 250px;
    border: none;
    padding: 0 30px;
    height: 45px;
    background-color: #333;
    color: white;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    background-color: #a2a4b3;
  }
`;

const ButtonClose = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  button {
    background-color: #333;
    width: 200px;
    border-radius: 7px;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
    padding: 10px;
  }
  button:hover {
    background-color: #a2a4b3;
  }
`;
