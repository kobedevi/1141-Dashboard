import { BrowserRouter as Router } from "react-router-dom";
import { ElectronProvider } from "./core/context/electron";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";

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
