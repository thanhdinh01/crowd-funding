import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:4001/",
  headers: {
    "Content-Type": "application/json",
  },
});
