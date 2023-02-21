import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ title, url, route }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(route);
  };

  return (
    <div className="Category-container">
      <div
        className="Category-image"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="Category-text-container" onClick={navigateHandler}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
