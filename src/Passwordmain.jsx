import React from "react";
import ReactDOM from "react-dom/client";
import PasswordApp from "./components/passwordFolder/PasswordApp"; // Corrected the casing of the file name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordApp />
  </React.StrictMode>,
);
