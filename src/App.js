import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar";
import SignIn from "./routes/Sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
