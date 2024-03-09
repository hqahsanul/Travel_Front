import React, { createContext, useContext, useEffect, useState } from "react";
import { apiPost, checkUserLogin, apiGet } from "../utils/ApiFetch";
import ApiPath from "../utils/ApiPath";
import { useLocation, useNavigate } from "react-router-dom";

const ChatContext = createContext();
export default ChatContext;
export const ChatProvider = ({ children }) => {
  const location = useLocation();

  // useEffect(() => {
  //   const getSearchList = async (parms) => {
  //     const searchList = await apiGet(ApiPath.getSearchList + parms);
  //     console.log("searchList: ", searchList);
  //     if (searchList.lenght > 0) {
  //       return searchList.data;
  //     }
  //   };

  //   getSearchList();
  // }, []);

  return (
    <ChatContext.Provider
      value={{
        projectId,
        setProjectId,
        promptId,
        setPromptId,
        text,
        setText,
        userPrompt,
        setUserPrompt,
        setChatData,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
