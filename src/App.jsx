import { BrowserRouter as Router } from "react-router-dom";
import { ElectronProvider } from "./core/context/electron";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    // Make ipcRenderer available everywhere via contextProvider
    <ElectronProvider>
      <Router>
        <Dashboard />
      </Router>
    </ElectronProvider>
  );
}

export default App;
