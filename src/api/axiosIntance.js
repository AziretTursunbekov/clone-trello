import axios from "axios";

export const axoisIntance = axios.create({
  baseURL: "https://dcf5d7b9be3a06d3.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
