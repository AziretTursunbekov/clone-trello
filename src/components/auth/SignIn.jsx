import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInRequest } from "../../store/thunks/authThunks";
import imageTrello from "../../assets/images/trello-images.png";

export const SignIn = () => {
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
    },
  });

  const submitHandle = (userData) => {
    if (userData) {
      userData.role = "ADMIN";
    }
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <StyledContainer>
      <img src={imageTrello} alt="trello image" />
      <form onClick={handleSubmit(submitHandle)}>
        <h3>Вход в Trello </h3>
        <div>
          <div>
            <input
              type="text"
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
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите password",
                },
                minLength: {
                  value: 6,
                  message: "пароль должен быть неменее 6 символов",
                },
                maxLength: {
                  value: 15,
                  message: "слишком много ",
                },
              })}
            />
            <p>{errors?.password?.message}</p>
          </div>
          <Button type="submit">Продолжить</Button>
        </div>
        <section>
          <Link to={"/register"}>Зарегистрировать аккаунт</Link>
        </section>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #aca9a9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
    margin-bottom: 5px;
  }

  & > form {
    width: 400px;
    height: 410px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
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
        height: 65px;
        width: 100%;
        & > input {
          width: 100%;
          height: 50px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 500;
          padding-left: 10px;
        }
        & > p {
          font-weight: 700;
          color: red;
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
      & > a {
        text-decoration: none;
      }
    }

    & > section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }
`;
