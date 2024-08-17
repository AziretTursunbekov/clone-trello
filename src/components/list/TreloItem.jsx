import React, { useState } from "react";
import Button from "../UI/Button";
import { GrClose } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  closeCart,
  deleteList,
  openCart,
} from "../../store/slices/TrelloSlice";
import Cart from "./Cart";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const TreloItem = ({ title, id, newTrello }) => {
  const [trelloCart, setTrelloCart] = useState("");
  const [iconCart, setIconCart] = useState(false);
  const dispatch = useDispatch();
  const { isOpenCart } = useSelector((store) => store.trello);

  const handleChange = (e) => {
    setTrelloCart(e.target.value);
  };

  const addNewCart = () => {
    const newCart = {
      cartTitle: trelloCart,
      id: Date.now().toString(),
      prid: id,
    };
    if (trelloCart.trim() === "") {
      return alert("Заполните поле!!!");
    }
    dispatch(addCart(newCart));
    setTrelloCart("");
  };

  const deleteHandler = (trelloId) => {
    dispatch(deleteList(trelloId));
  };

  const handlerClick = (cartId) => {
    // setCart(true);
    dispatch(openCart(cartId));
  };

  const closeHandler = () => {
    dispatch(closeCart());
  };

  return (
    <Styledlist key={id}>
      <TitleStyleIcon>
        <h2>{title}</h2>
        {isOpenCart == id && (
          <article onClick={closeHandler}>
            <div>
              <h4>Действия со списком</h4>
              {/* <GrClose /> */}
              <div>
                <p>Добваить карточку...</p>
                <p>Копировать список...</p>
                <p style={{ color: "black" }} onClick={() => deleteHandler(id)}>
                  Архивировать список
                </p>
              </div>
            </div>
          </article>
        )}
        <BsThreeDots
          onClick={() => handlerClick(id)}
          style={{ color: "black", fontSize: 25, position: "relative" }}
        />
      </TitleStyleIcon>
      {newTrello?.map((cart) => (
        <Cart key={cart.id} {...cart} />
      ))}
      {iconCart ? (
        <FirstCard>
          <input
            type="text"
            onChange={handleChange}
            value={trelloCart}
            placeholder="ввести загаловок для этой карточки"
          />
          <BtnAddStyle>
            <Button type="submit" onClick={addNewCart}>
              Добавить список
            </Button>
            <GrClose
              style={{ cursor: "pointer", color: "black" }}
              onClick={() => setIconCart(!iconCart)}
            />
          </BtnAddStyle>
        </FirstCard>
      ) : (
        <AddListStyleBtn>
          <Button type="submit" onClick={() => setIconCart(!iconCart)}>
            Добавить список
          </Button>
          <IoMdAdd fontSize={25} style={{ color: "black" }} />
        </AddListStyleBtn>
      )}
    </Styledlist>
  );
};

export default TreloItem;

const Styledlist = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 25px;
  width: 300px;

  border-radius: 10px;
  background-color: white;
  h4 {
    font-size: 18px;
  }
`;

const FirstCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 5px;
    margin-left: 7px;
    font-size: 15px;
    border: 1px solid;
    padding: 5px;
    width: 280px;
    height: 80px;
    border-radius: 10px;
    background-color: #ffffff;
    color: black;
  }
`;

const BtnAddStyle = styled.div`
  margin-top: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    background-color: #3d3c3c;
    width: 250px;
    height: 35px;

    border-radius: 7px;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
  }
  button:hover {
    background-color: #a2a4b3;
  }
`;

const AddListStyleBtn = styled.div`
  font-size: 20px;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  button {
    width: 250px;
    height: 30px;
    padding: 0 10px;
    background-color: #3d3c3c;
    border-radius: 5px;
    color: white;
  }
`;

const TitleStyleIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  padding: 10px;
  position: relative;

  & > h2 {
    color: black;
  }
  & > article {
    position: absolute;
    left: 90%;
    top: 70%;
    width: 100vw;
    height: 70vh;
    & > div {
      width: 180px;
      height: 200px;
      z-index: 10;
      background-color: #c2bbbbad;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      & > h4 {
        color: black;
        font-size: 15px;
        margin-top: 10px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 190px;
        padding-left: 10px;
        /* align-items: center; */
        & > p {
          cursor: pointer;
          color: black;
          font-size: 15px;
        }
      }
    }
  }
`;
