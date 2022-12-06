import "./App.css";
import React from "react";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}
