import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ElectronProvider } from "./core/context/electron";

function App() {
  return (
    <ElectronProvider>
      <Router>
        <Dashboard />
      </Router>
    </ElectronProvider>
  );
}

export default App;
