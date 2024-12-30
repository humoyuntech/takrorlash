import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import { UserProvider } from "./contex/user";
import { HRProvider } from "./contex/hr";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <HRProvider>
         <Root />
      </HRProvider>
    </UserProvider>
  </React.StrictMode>
);
