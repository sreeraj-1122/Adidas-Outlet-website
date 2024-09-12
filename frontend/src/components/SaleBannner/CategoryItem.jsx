import React from 'react'
import './SaleBanner.css';

const CategoryItem = ({ image, title }) => (
    <div className="category-item">
      <img src={image} alt={`${title} Category`} className="category-image" />
      <div className="category-title">
      <h2 >{title}</h2>
      </div>
    </div>
  );

export default CategoryItem