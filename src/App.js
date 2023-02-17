import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar";
import Shop from "./routes/Shop";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
