import { createContext, useEffect, useState } from "react";
import useElectron from "../hooks/useElectron";

const DataContext = createContext();

// Content provider for the ipcRenderer function
const DataProvider = ({ children }) => {
  const { ipcRenderer } = useElectron();

  const initialData = () => {
    return ipcRenderer.sendSync("getClients");
  };

  const [data, setData] = useState(initialData);

  // Register listener after render
  useEffect(() => {
    ipcRenderer.on("dataChange", (event, arg) => {
      console.log("Got data");
      setData(arg);
    });
  }, [ipcRenderer]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
