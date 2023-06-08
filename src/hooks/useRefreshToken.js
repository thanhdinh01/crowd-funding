import axios from "../api/axios";
import { getToken, saveToken } from "../utils/authCookie";

export default function useRefreshToken() {
  async function fetchRefreshToken() {
    const { refresh_token } = getToken();
    const res = await axios.post("/token", {
      "Content-Type": "application/json",
      refreshToken: refresh_token,
    });
    console.log("res", res);
    if (res.data) {
      console.log("save token...");
      saveToken(res.data.accessToken, res.data.refreshToken);
    }
    return res.data.accessToken;
  }
  return fetchRefreshToken;
}
