import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DonatePage from "./pages/DonatePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/donate" element={<DonatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
