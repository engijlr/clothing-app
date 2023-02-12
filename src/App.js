import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
