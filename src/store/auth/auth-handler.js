import { call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { requestAuthLogin, requestAuthRegister } from "./auth-request";
import { saveToken } from "../../utils/authCookie";

export default function* handleRegister(action) {
  try {
    const { payload } = action;
    const response = yield call(requestAuthRegister, payload);
    console.log("res", response);
    if (response.status === 201) {
      toast.success("User is created successfully!");
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      toast.error("User already exists");
    }
  }
}

function* handleLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log("res", response);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 403) {
      toast.error("Authentication Failed");
    }
  }
}

export { handleRegister, handleLogin };
