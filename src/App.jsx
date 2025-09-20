import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateAccount from "./components/CreateAccount";
import AccountSettings from "./components/AccountSettings";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
