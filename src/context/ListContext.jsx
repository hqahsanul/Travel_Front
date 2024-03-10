import React, { createContext, useContext, useEffect, useState } from "react";
import { apiPost, apiGet } from "../utils/ApiFetch";
import ApiPath from "../utils/ApiPath";
import { useLocation, useNavigate } from "react-router-dom";

const ListContext = createContext();
export default ListContext;
export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [fromSuggestions, setFromSuggestions] = useState([]);

  const location = useLocation();
  const getSearchList = async (parms, type) => {
    console.log("parms", parms, "type", type);
    const searchList = await apiGet(
      ApiPath.getFlightSearchList + (parms ? parms : "")
    );
    if (searchList.length > 0) {
      console.log("Search", searchList, type);
      setList(searchList);
      if (type && type == "from") {
        setFromSuggestions(searchList);
      }
      return searchList;
    }
  };

  useEffect(() => {
    getSearchList();
  }, []);

  return (
    <ListContext.Provider
      value={{
        getSearchList,
        list,
        setList,
        fromSuggestions,
        setFromSuggestions,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
