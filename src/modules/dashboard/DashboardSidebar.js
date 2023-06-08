import React from "react";
import IconDashboard from "../../components/icons/IconDashboard";
import IconCampaign from "../../components/icons/IconCampaign";
import IconPayment from "../../components/icons/IconPayment";
import IconWithdraw from "../../components/icons/IconWithdraw";
import IconProfile from "../../components/icons/IconProfile";
import IconLogout from "../../components/icons/IconLogout";
import IconLightDark from "../../components/icons/IconLightDark";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../store/auth/auth-slice";
import { toast } from "react-toastify";

const listSidebar = [
  {
    icon: <IconDashboard></IconDashboard>,
    url: "/",
    title: "Dashboard",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    url: "/campaign",
    title: "Campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    url: "/payment",
    title: "Payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    url: "/withdraw",
    title: "Withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    url: "/profile",
    title: "Profile",
  },

  {
    icon: <IconLogout></IconLogout>,
    url: "/logout",
    title: "Logout",
  },
  {
    icon: <IconLightDark></IconLightDark>,
    url: "/lighdark",
    title: "Light/Dark",
  },
];

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navLinkClass =
    "md:p-[10px] last:mt-auto last:shadow-[10px_10px_20px_rgba(211,_211,_211,_0.25)] rounded-xl";

  return (
    <div className="w-[76px] max-h-[750px] bg-white rounded-[20px] py-10 px-[14px] flex flex-col gap-8 items-center shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
      {listSidebar.map((item) => {
        if (item.url === "/logout") {
          return (
            <button
              className={navLinkClass}
              key={item.title}
              onClick={() => {
                dispatch(authLogOut());
                navigate("/sign-in");
                toast.info(`logged out`, {
                  pauseOnHover: false,
                  autoClose: 2000,
                });
              }}
            >
              <span className="transition-all">{item.icon}</span>
              <span className="text-sm transition-all md:hidden text-text3">
                {item.title}
              </span>
            </button>
          );
        }
        return (
          <NavLink
            to={item.url}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
                : `${navLinkClass} text-iconColor`
            }
          >
            <span className="transition-all">{item.icon}</span>
            <span className="text-sm transition-all md:hidden text-text3">
              {item.title}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
