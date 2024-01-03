import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";
import UserContext from "./context";
const user = {
  name: "Oscar",
  date: "2024",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
