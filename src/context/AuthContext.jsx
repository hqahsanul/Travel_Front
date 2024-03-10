import React, { createContext, useState, useEffect, useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { apiGet, apiPost } from "../utils/ApiFetch";
import apiPath from "../utils/ApiPath";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let [user, setUser] = useState("lucky");
  let [profile, setProfile] = useState({});

  //   const notification = useContext(ToastContext);
  // let [user, setUser] = useState(() =>
  //     localStorage.getItem('token')
  //         ? jwt_decode(localStorage.getItem('token'))
  //         : null
  // )

  //   const getPrompt = async () => {
  //     try {
  //       const response = await apiGet(apiPath.promptList);
  //       if (response?.message === "Prompt list fetched successfully.") {
  //         setPromptList(response?.promptList?.slice(0, 6) || []);
  //       } else {
  //         handleUnAuthorized(response, navigate, notification);
  //       }
  //     } catch (err) {
  //       console.log("error in getpromptlist api :>> ", err);
  //     }
  //   };

  //   const getProject = async () => {
  //     try {
  //       const response = await apiGet(apiPath.projectList);
  //       if (response?.message === "Project list found successfully.") {
  //         setProjectList(response?.projects || []);
  //       } else {
  //         handleUnAuthorized(response, navigate, notification);
  //       }
  //     } catch (err) {
  //       console.log("error in getpromptlist api :>> ", err);
  //     }
  //   };

  const getProfile = async () => {
    try {
      const response = await apiGet(apiPath.getProfile);
      if (response?.success) {
        setProfile(response?.data?.profile);
      } else {
        // handleUnAuthorized(response, navigate, notification);
      }
    } catch (err) {
      console.log("error in getpromptlist api :>> ", err);
    }
  };

  const getToken = () => localStorage.getItem("userToken")?.slice(1, -1);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigate("/");
    setTimeout(() => {
      //   notification.success("Logout successfully.");
    }, 300);
  };

  useEffect(() => {
    //  getProfile();
    // if (
    //   [
    //     "/chat-category",
    //     "/chat-list",
    //     "/subscription-plan",
    //     "/profile-page",
    //     "/invoice-page",
    //   ].includes(location.pathname)
    // ) {
    //   getProfile();
    // }
  }, [location.pathname]);

  let contextData = {
    getToken,
    handleLogout,
    profile,
    // loginUser: loginUser,
    // logoutUser: logoutUser,
    // updateProfile: updateProfile
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
