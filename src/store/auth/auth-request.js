import axios from "../../api/axios";

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};
export const requestFetchMe = (token) => {
  if (!token) return null;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearers ${token}`,
    },
  });
};
export const requestRefreshToken = (token) => {
  if (!token) return null;
  return axios.post("/token", {
    "Content-Type": "application/json",
    refreshToken: token,
  });
};
