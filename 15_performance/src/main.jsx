import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import lectures from "./lectures.js";

const root = createRoot(document.getElementById
  ("root"))
  
root.render(
    <App lectures={lectures} />
);
