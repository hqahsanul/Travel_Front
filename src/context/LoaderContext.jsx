import React, { useState, createContext } from "react";
import ClipLoader from "react-spinners/HashLoader";
import CustomLoader from "../components/loader/loader";

const LoaderContext = createContext();

export default LoaderContext;
export const LoaderContextProvider = ({ children }) => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#01e7a5");

  return (
    <LoaderContext.Provider value={{ setLoading, loading }}>
      {children}
      {loading ? (
        <div className="overlay">
          <CustomLoader />
        </div>
      ) : null}
    </LoaderContext.Provider>
  );
};
