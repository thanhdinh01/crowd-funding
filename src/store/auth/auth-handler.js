import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  requestAuthLogin,
  requestAuthRegister,
  requestFetchMe,
  requestRefreshToken,
} from "./auth-request";
import { logOut, saveToken } from "../../utils/authCookie";
import { authUpdateUser } from "./auth-slice";

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
    // console.log("res", response);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleUpdateUser, { payload: response.data.accessToken });
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 403) {
      toast.error("Authentication Failed");
    }
  }
}

function* handleUpdateUser({ payload }) {
  try {
    const res = yield call(requestFetchMe, payload);
    console.log("res handleUpdateUser", res);
    yield put(
      authUpdateUser({
        user: res.data,
        accessToken: payload,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

function* handleRefreshToken({ payload }) {
  console.log("payload handleRefreshToken", payload);
  try {
    const res = yield call(requestRefreshToken, payload);
    console.log("handleRefreshToken res", res);
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield call(handleUpdateUser, { payload: res.data.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}

export { handleRegister, handleLogin, handleRefreshToken, handleLogOut };
