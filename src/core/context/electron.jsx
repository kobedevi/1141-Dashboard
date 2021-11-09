import { createContext } from "react";

const { ipcRenderer } = window.require("electron");

const ElectronContext = createContext();

// Content provider for the ipcRenderer function
const ElectronProvider = ({ children }) => {
  return (
    <ElectronContext.Provider value={{ ipcRenderer }}>
      {children}
    </ElectronContext.Provider>
  );
};

export { ElectronContext, ElectronProvider };
