import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData, productData1 } from "../../utils/productData";
import SaleBanner from './../../components/SaleBannner/SaleBanner ';
import BottomBanner from "../../components/SaleBannner/BottomBanner";
import CategorySection from "../../components/CategorySection/CategorySection";
import SignupBanner from "../../components/SaleBannner/SignupBanner";

const Home = () => {
  return (
    <div>
      <SaleBanner />
      <div className="product-list">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} /> 
        ))}
      </div>
      <BottomBanner/>
      <div className="product-list">
        {productData1.map((product, index) => (
          <ProductCard key={index} product={product} /> 
        ))}
      </div>
      <CategorySection/>
        <SignupBanner/>
    </div>
  );
};

export default Home;
