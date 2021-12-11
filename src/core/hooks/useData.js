import { useContext } from "react";
import { DataContext } from "../context/data";

// Simple hook to get the ipcRenderer function from context
export default function useData() {
  // get the electron shizzle from context
  const { data } = useContext(DataContext);

  // output the necessary objects
  return { data };
}
