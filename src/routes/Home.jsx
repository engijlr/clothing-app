import React from "react";
import { Outlet } from "react-router-dom";
import CategoryList from "../CategoryList";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryList />
    </div>
  );
};

export default Home;
