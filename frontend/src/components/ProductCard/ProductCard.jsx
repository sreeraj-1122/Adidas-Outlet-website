import React from "react";
import "./ProductCard.css"; // Import the CSS file
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
        {product.discount && (
          <span className="discount-label">-{product.discount}%</span>
        )}
        <div className="product-prices">
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discounted-price">₹{product.discountedPrice}</span>
        </div>
        <div className="favourate">
        <MdOutlineFavoriteBorder />

        </div>
      </div>
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-category">{product.category}</p>

        <p className="product-colors">{product.colors} colours</p>

        <button className="add-to-cart-btn" >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
