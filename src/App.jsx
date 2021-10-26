import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
