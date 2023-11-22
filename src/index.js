import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AnimCursor from "./components/animatedCursor/AnimCursor";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <AnimCursor />
    <App />
  </>
);
