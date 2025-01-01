import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import Contex from "./contex";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contex>
      <Root />
    </Contex>
  </React.StrictMode>
);
