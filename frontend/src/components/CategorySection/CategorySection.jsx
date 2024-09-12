import React from 'react';
import { categories } from '../../utils/productData';
import './CategorySection.css'
const CategorySection = () => {
  // Calculate number of items per column
  const itemsPerColumn = 12;
  
  // Split categories into arrays of 12 items each
  const categoryColumns = [];
  for (let i = 0; i < categories.length; i += itemsPerColumn) {
    categoryColumns.push(categories.slice(i, i + itemsPerColumn));
  }

  return (
    <div className="category-list">
      <h2>Our clothing and shoe categories</h2>
      <div className="category-columns">
        {categoryColumns.map((column, columnIndex) => (
          <ul key={columnIndex} className="category-column">
            {column.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
