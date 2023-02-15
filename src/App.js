import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar";
import Authentication from "./routes/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
