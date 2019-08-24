import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import theme from "../assets/react-toolbox/theme.js";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../assets/react-toolbox/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
