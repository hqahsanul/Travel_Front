import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoaderContextProvider } from "./context/LoaderContext.jsx";

// import { Provider } from "react-redux";
// import store from "../src/redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoaderContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LoaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
