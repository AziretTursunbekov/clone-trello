import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../../store/thunks/authThunks";
import { Link, useNavigate } from "react-router-dom";
import imageTrello from "../../assets/images/trello-images.png";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "", 
      firstName: "",
      lastName: "",
    },
  });

  const submitHandler = (userData) => {
    if (userData) {
      userData.role = "ADMIN";
    }

    dispatch(signUpRequest({ userData, navigate }));
  };

  return (
    <StyledContainer>
      <img src={imageTrello} alt="trello image" />
      <form onClick={handleSubmit(submitHandler)}>
        <h3>Вход в Trello </h3>
        <div>
          <div>
            <input
              type="text"
              placeholder="Введите имя "
              {...register("firstName", { required: "Введите имя" })}
            />
            <p>{errors?.firstName?.message}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Введите фамилию "
              {...register("lastName", { required: "Введите фамилию " })}
            />
            <p>{errors?.lastName?.message}</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Укажите адрес электронной почты "
              {...register("email", {
                required: {
                  value: true,
                  message: "Введите email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "не правильно введень email",
                },
              })}
            />
            <p>{errors?.email?.message}</p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль "
              {...register("password", { required: "Введите пароль" })}
            />
            <p>{errors?.password?.message}</p>
          </div>

          <Button type="submit">Продолжить</Button>
        </div>
        <section>
          <h4>
            У вас есть аккаунт?
            <Link to={"/login"}> Войти</Link>
          </h4>
        </section>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c5c5c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
    margin-bottom: 5px;
  }

  & > form {
    width: 500px;
    height: 570px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border-radius: 15px;
    & > h3 {
      color: gray;
      font-size: 29px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      border-bottom: 3px solid gray;
      padding-bottom: 30px;
      & > div {
        width: 100%;
        height: 65px;
        & > p {
          font-weight: 600;
          color: red;
        }
        & > input {
          width: 100%;
          height: 50px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 500;
          padding-left: 10px;
        }
      }
      & > button {
        background-color: green;
        height: 60px;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-size: 19px;
        font-weight: bold;
      }
    }
    & > section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      h4 {
        a {
          text-decoration: none;
        }
      }
    }
  }
`;
