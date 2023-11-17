import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import DonatePage from "./pages/donatePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DonatePage />}></Route>
        <Route path="/donate" element={<DonatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
