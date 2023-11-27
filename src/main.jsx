import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SayHello from "./JsConcepts.jsx";
import JsConcepts from "./JsConcepts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <JsConcepts />
  </React.StrictMode>
);
