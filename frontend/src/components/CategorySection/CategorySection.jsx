import React from 'react';
import './CategorySection.css'
const categories = [
  ["Shoes", "Originals", "Long Sleeves", "Training T Shirts", "Black T Shirts", "White Jackets"],
  ["T Shirts", "Jerseys", "Short Sleeves", "Tennis Shirts", "Black Caps", "White Shirts"],
  ["Shirts", "Sweatshirts", "Swimwear", "Skateboarding Sneakers", "Black Hoodies", "Blue Sweatshirts"],
  ["Jackets", "Water Bottle", "Ankle Socks", "Lifestyle Sneakers", "Black Jackets", "Yellow T Shirts"],
  ["Bags", "Pants", "Face Covers", "Training Shirts", "Black Pants", "Black Sandals"],
  ["Sandals", "Tracksuits", "Men Shirts", "Lifestyle Flip Flops", "Blue Hoodies", "Shoes"],
  ["Caps", "Socks", "Women Dresses", "White Shoes", "Black Sneakers", "T Shirts"],
  ["Sneakers", "Gloves", "Men Caps", "Black Dresses", "Red Shoes", "Shirts"],
  ["Shorts", "Football Boots", "Women Sandals", "Black Shirts", "Pink Shoes", "Jackets"],
  ["Hoodies", "Polo Shirt", "Men Slides", "Black Shoes", "Black Bras", "Bags"],
  ["Slides", "Tights", "Lifestyle Shirts", "White Sneakers", "Black Sweatshirts", "Sandals"],
  ["Flip Flops", "Hooddies", "Lifestyle T Shirts", "White T Shirts", "White Hoodies", "Caps"]
];

const CategorySection = () => {
  return (
    <div className="product-categories">
      <h2 className="category-header">OUR CLOTHING AND SHOE CATEGORIES</h2>
      <div className="category-grid">
        {categories.map((column, columnIndex) => (
          <div key={columnIndex} className="category-column">
            {column.map((category, index) => (
              <a key={index} href="#" className="category-item">
                {category}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="sale-description">
        <h3>adidas Clothes and Shoes on Sale</h3>
        <p>
          Shop online for adidas shoes and clothes on sale and save on everything you need to get in the game. 
          Put in the miles or just keep up with the kiddos in cushioned running shoes. 
          Takeover the field or court in adidas soccer, football and basketball shoes on sale. 
          Rock the 3-Stripes in comfy track pants and jackets, sports bras and t-shirts. 
          Whatever you and your family need, you'll find it on sale at adidas online.
        </p>
      </div>
    </div>
  );
};

export default CategorySection;