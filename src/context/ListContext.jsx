import React, { createContext, useContext, useEffect, useState } from "react";
import { apiPost, apiGet } from "../utils/ApiFetch";
import ApiPath from "../utils/ApiPath";
import { useLocation, useNavigate } from "react-router-dom";

const ListContext = createContext();
export default ListContext;
export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  let [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const location = useLocation();
  const getSearchList = async (parms, type) => {
    console.log("parms", parms, "type", type);
    const searchList = await apiGet(
      ApiPath.getFlightSearchList + (parms ? parms : "")
    );
    if (searchList && searchList.length > 0) {
      console.log("Search", searchList, type);

      if (type && type == "from") {
        setFromSuggestions(searchList);
      } else if (type && type == "to") {
        setToSuggestions(searchList);
      }
      return searchList;
    }
  };

  useEffect(() => {
    getSearchList();
  }, []);

  let contextData = {
    getSearchList,
    list,
    setList,
    fromSuggestions,
    setFromSuggestions,
    toSuggestions,
    setToSuggestions,
  };

  return (
    <ListContext.Provider value={contextData}>{children}</ListContext.Provider>
  );
};
