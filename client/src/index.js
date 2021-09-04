import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "./GlobalState";
import axios from "axios";
import MessengerCustomerChat from "react-messenger-customer-chat";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ToastContainer />
      <App />
      <MessengerCustomerChat pageId="103973174662277" appId="587429252625964" />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
