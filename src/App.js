import "./App.css";
import InstallKobodrop from "./components/Install-Kobodrop";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/installkobodrop" element={<InstallKobodrop />} />
      </Routes>
    </Router>
  );
}

export default App;
