import { takeLatest } from "redux-saga/effects";
import { authLogin, authRegister } from "./auth-slice";
import { handleLogin, handleRegister } from "./auth-handler";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleRegister);
  yield takeLatest(authLogin.type, handleLogin);
}
