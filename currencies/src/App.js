import React from "react";
import Landing from "./components/Landing.jsx";
import Currencies from "./components/Currencies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataTable from "./components/Table";
import { Provider } from "react-redux";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/currencies" element={<Currencies />} />
          <Route exact path="/table" element={<DataTable />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}
