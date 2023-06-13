import axios from "axios";

export default axios.create({
  baseURL: "https://json-crowd-funding-auth.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: "https://json-crowd-funding-db.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
