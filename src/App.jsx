import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import useElectron from "./core/hooks/useElectron";

function App() {
  const { ipcRenderer } = useElectron();

  const clients = ipcRenderer.sendSync("getClients");

  return (
    <Router>
      <Dashboard clients={clients} />
    </Router>
  );
}

export default App;
