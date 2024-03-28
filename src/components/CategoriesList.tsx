import React from "react";
import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { categories, error, isLoading } = useCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
