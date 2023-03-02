import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <BrowserRouter>
      <UserContextProvider>
         <App />
      </UserContextProvider>
   </BrowserRouter>
);

reportWebVitals();
