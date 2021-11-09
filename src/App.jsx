import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ElectronProvider } from "./core/context/electron";
import { DataProvider } from "./core/context/data";
import { ClientSidebar } from "./components/Sidebar/ClientSidebar";

function App() {
  return (
    // Make ipcRenderer available everywhere via contextProvider
    <ElectronProvider>
      <DataProvider>
        <Router>
          <main>
            <ClientSidebar />
            <Dashboard />
          </main>
        </Router>
      </DataProvider>
    </ElectronProvider>
  );
}

export default App;
