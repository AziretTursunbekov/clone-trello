import { createAsyncThunk } from "@reduxjs/toolkit";
import { axoisIntance } from "../../api/axiosIntance";

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axoisIntance.post("/register/", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axoisIntance.post("/auth/", userData);

      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
