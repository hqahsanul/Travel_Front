import React, { createContext, useContext, useEffect, useState } from "react";
import { apiPost, apiGet } from "../utils/ApiFetch";
import ApiPath from "../utils/ApiPath";
import { useLocation, useNavigate } from "react-router-dom";

const ListContext = createContext();
export default ListContext;
export const ListProvider = ({ children }) => {
  const [flightListData, setFlightListData] = useState([]);
  const [hotelListData, setHotelListData] = useState([]);
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
  const getHotelListData = async (data) => {
    try {
      const response = await apiGet(ApiPath.getHotelData, data);
      // console.log("response", response.data);
      setHotelListData(response.data?.Search?.HotelSearchResult?.HotelResults);
      // setToursitData(toursitData);
      return response.data?.Search?.HotelSearchResult?.HotelResults;
    } catch (error) {
      console.log("Failed to get hotel list data", error);
    }
  };

  let contextData = {
    getFlightListData,
    flightListData,
    toursitData,
    getHotelListData,
    hotelListData,
  };

  return (
    <ListContext.Provider value={contextData}>{children}</ListContext.Provider>
  );
};
