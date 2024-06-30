import React from "react";
import ReactDOM from "react-dom/client";
import MainWrapper from "./components/MainWrapper/MainWrapper.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <MainWrapper />


    </Router>
  </React.StrictMode>,
);
