import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<h1>test</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
