import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}
