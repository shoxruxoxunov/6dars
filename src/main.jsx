import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./context/GlobabContext.jsx";
// toisty
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <ToastContainer />
  </>,
);
