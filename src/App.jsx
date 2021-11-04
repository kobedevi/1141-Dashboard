import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ElectronProvider } from "./core/context/electron";
import { DataProvider } from "./core/context/data";
import { ClientSidebar } from "./components/Sidebar/ClientSidebar";
import { Configure } from "./pages/Configure";

function App() {
  return (
    // Make ipcRenderer available everywhere via contextProvider
    <ElectronProvider>
      <DataProvider>
        <Router>
          <main>
            <ClientSidebar />

            <Switch>
              <Route path="/configure">
                <Configure />
              </Route>

              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </main>
        </Router>
      </DataProvider>
    </ElectronProvider>
  );
}

export default App;
