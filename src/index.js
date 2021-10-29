import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/main.css";

import { ElectronProvider } from "./core/context/electron";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ElectronProvider>
      <App />
    </ElectronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
