import * as React from "react";
import useElectron from "../hooks/useElectron";

const DataContext = React.createContext();

// Content provider for the ipcRenderer function
const DataProvider = ({ children }) => {
  const { ipcRenderer } = useElectron();

  const [data, setData] = React.useState(ipcRenderer.sendSync("getClients"));

  ipcRenderer.on("dataChange", (event, arg) => {
    ipcRenderer.removeAllListeners("dataChange");
    setData(arg);
  });

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
