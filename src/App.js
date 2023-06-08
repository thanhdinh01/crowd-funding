import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./utils/authCookie";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage = React.lazy(() => import("./pages/CampaignPage"));
const CampaignAdd = React.lazy(() => import("./modules/campaign/CampaignAdd"));
const CampaignView = React.lazy(() =>
  import("./modules/campaign/CampaignView")
);
const LayoutDashboard = React.lazy(() => import("./layout/LayoutDashboard"));
const customStyles = {};

Modal.setAppElement("#root");

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect nay de cap nhat trang thai toke cua user, refresh lay token moi de duy tri dang nhap
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      console.log("have user: ", access_token);
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      console.log("user", user);
      const { refresh_token } = getToken();
      console.log("not have user: ", refresh_token);
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      }
    }
  }, [dispatch, user]);

  return (
    <Suspense fallback={<p></p>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/add-new"
            element={<CampaignAdd></CampaignAdd>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
