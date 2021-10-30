import { useContext } from "react";
import { ElectronContext } from "../context/electron";

// Simple hook to get the ipcRenderer function from context
export default function useElectron() {
  // get the electron shizzle from context
  const { ipcRenderer } = useContext(ElectronContext);

  // output the necessary objects
  return { ipcRenderer };
}
