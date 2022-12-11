import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/skeleton.css";
import "animate.css";
import "./styles/root.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
