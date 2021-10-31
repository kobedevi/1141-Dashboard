import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/main.css";

import App from "./App";
import { ElectronProvider } from "./core/context/electron";

ReactDOM.render(
  <React.StrictMode>
    {/* Make ipcRenderer available everywhere via contextProvider */}
    <ElectronProvider>
      <App />
    </ElectronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
