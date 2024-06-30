import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/PasswordFolder/App"; // Corrected the casing of the file name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
