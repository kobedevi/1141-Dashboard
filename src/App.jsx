import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import useElectron from "./core/hooks/useElectron";
import { clients } from "./core/routing/routes";

function App() {
  const { ipcRenderer } = useElectron();

  ipcRenderer.on("state", (event, arg) => {
    const { name, state } = arg;
    const objectIndex = clients.findIndex((obj) => obj.id === name);
    clients[objectIndex].state = state;
  });

  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
