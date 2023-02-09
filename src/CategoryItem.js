import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ title, url }) => {
  return (
    <div className="Category-container">
      <div
        className="Category-image"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="Category-text-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
