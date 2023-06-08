import { takeLatest } from "redux-saga/effects";
import {
  authLogOut,
  authLogin,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
import {
  handleLogOut,
  handleLogin,
  handleRefreshToken,
  handleRegister,
} from "./auth-handler";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleRegister);
  yield takeLatest(authLogin.type, handleLogin);
  yield takeLatest(authRefreshToken.type, handleRefreshToken);
  yield takeLatest(authLogOut.type, handleLogOut);
}
