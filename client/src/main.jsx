import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/homepage.jsx";
import DonatePage from "./pages/DonatePage.jsx";
import "./App.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Route path="/" element={<Homepage />} />
      <Route path="/donate" element={<DonatePage />} />
    </Router>
  </React.StrictMode>
);
