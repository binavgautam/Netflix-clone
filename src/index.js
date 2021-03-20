import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import "./index.css";
import "normalize.css";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
