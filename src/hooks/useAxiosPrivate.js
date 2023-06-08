import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const { auth } = useSelector((state) => state);
  const fetchRefreshToken = useRefreshToken();
  useEffect(() => {
    // Add a request interceptor
    const reqInterceptor = axiosPrivate.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    const resInterceptor = axiosPrivate.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        console.log("interceptor error...");
        const prevRequest = error.config;
        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = fetchRefreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(reqInterceptor);
      axiosPrivate.interceptors.request.eject(resInterceptor);
    };
  }, [auth.accessToken, fetchRefreshToken]);
  return axiosPrivate;
}
