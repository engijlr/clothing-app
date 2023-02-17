import React from "react";
import CategoryItem from "./CategoryItem";
import "./CategoryList.css";

const CategoryList = ({ categories }) => {
  return (
    <div className="Category-list-container">
      {categories.map((c) => {
        return <CategoryItem key={c.id} title={c.title} url={c.imageUrl} />;
      })}
    </div>
  );
};

export default CategoryList;
