import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StyleRoot } from "radium";

ReactDOM.render(
  <BrowserRouter>
    <StyleRoot>
      <App />
    </StyleRoot>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
