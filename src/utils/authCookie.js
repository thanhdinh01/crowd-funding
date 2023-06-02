import Cookies from "js-cookie";
const accessToken = "crowd_access_token";
const refreshToken = "crowd_refresh_token";

const objCookie = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessToken, access_token, { ...objCookie });
    Cookies.set(refreshToken, refresh_token, { ...objCookie });
  } else {
    Cookies.remove(accessToken, {
      ...objCookie,
      path: "/",
    });
    Cookies.remove(refreshToken, {
      ...objCookie,
      path: "/",
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessToken);
  const refresh_token = Cookies.get(refreshToken);
  return {
    access_token,
    refresh_token,
  };
};
