import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ElectronProvider } from "./core/context/electron";
import { DataProvider } from "./core/context/data";
import { ClientSidebar } from "./components/Sidebar/ClientSidebar";
import { CamerasOverview } from "./components/Cameras/CamerasOverview";

// TODO Merge timer functions
// TODO Merge Camera function

function App() {
  return (
    // Make ipcRenderer available everywhere via contextProvider
    <ElectronProvider>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/Cameras">
              <CamerasOverview />
            </Route>
            <Route path="/">
              <main>
                <ClientSidebar />
                <Dashboard />
              </main>
            </Route>
          </Switch>
        </Router>
      </DataProvider>
    </ElectronProvider>
  );
}

export default App;
