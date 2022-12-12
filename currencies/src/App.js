import "./App.css";
import React from "react";
import Landing from "./components/Landing.jsx";
import Currencies from "./components/Currencies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/currencies" element={<Currencies />} />
        </Routes>
      </Router>
    </div>
  );
}
