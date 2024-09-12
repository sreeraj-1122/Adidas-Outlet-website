import React from "react";
import "./SaleBanner.css";
import CategoryItem from "./CategoryItem";
import lo from "../../assets/logo.jpg"; // Example of an imported image
import menImage from "../../assets/men.jpg"; // Import the images like this
import womenImage from "../../assets/women.jpg";
import kidsImage from "../../assets/kid.jpg";
import slidesImage from "../../assets/slide.jpg";
import summerImage from "../../assets/summer.jpg";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { CiFilter } from "react-icons/ci";

const SaleBanner = () => {
  const categories = [
    { title: "MEN", image: menImage },
    { title: "WOMEN", image: womenImage },
    { title: "KIDS", image: kidsImage },
    { title: "SLIDES", image: slidesImage },
    { title: "SUMMER WEAR", image: summerImage },
  ];

  return (
    <div className="sale-banner-container">
      <Breadcrumb />
      <div className="sale-main">
        <h5 className="sale-title">
          SHOES, CLOTHING & ACCESSORIES SALE: UP TO 60% OFF
        </h5>
        <span className="sale-count">[4338]</span>
        <div className="categories-container">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
      <div className="blue-banner"></div>
      <div className="filter">
        <button>
          Filter&Sort <CiFilter />
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;
