import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import useElectron from "./core/hooks/useElectron";
import { useState } from "react";

function App() {
  const { ipcRenderer } = useElectron();

  const [clients, setClients] = useState(ipcRenderer.sendSync("getClients"));

  ipcRenderer.on("dataChange", (event, arg) => {
    ipcRenderer.removeAllListeners("dataChange");
    setClients(arg);
  });

  return (
    <Router>
      <Dashboard clients={clients} />
    </Router>
  );
}

export default App;
