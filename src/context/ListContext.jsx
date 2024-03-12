import React, { createContext, useContext, useEffect, useState } from "react";
import { apiPost, apiGet } from "../utils/ApiFetch";
import ApiPath from "../utils/ApiPath";
import { useLocation, useNavigate } from "react-router-dom";

const ListContext = createContext();
export default ListContext;
export const ListProvider = ({ children }) => {
  const [flightListData, setFlightListData] = useState([]);
  const [toursitData, setToursitData] = useState();

  const getFlightListData = async (data, toursitData) => {
    try {
      const response = await apiGet(ApiPath.getFlightData, data);
      setFlightListData(
        response.data?.Search?.FlightDataList?.JourneyList?.[0]
      );
      setToursitData(toursitData);
      return response.data?.Search?.FlightDataList?.JourneyList?.[0];
    } catch (error) {
      console.log("Failed to get flight list data", error);
    }
  };

  let contextData = {
    getFlightListData,
    flightListData,
    toursitData,
  };

  return (
    <ListContext.Provider value={contextData}>{children}</ListContext.Provider>
  );
};
