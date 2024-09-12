import React from "react";
import "./BottomBanner.css";
import { FaArrowRightLong } from "react-icons/fa6";

const BottomBanner = () => {
  return (
    <div className="banner-main">
      <h1>ADICLUB DAYS ARE BACK</h1>
      <p>Experience it all</p>
      <div className="button-div">
        <button>
          FIND OUT MORE <FaArrowRightLong className="arrow-icon" />
        </button>
        <div className="border-div"></div>
      </div>
    </div>
  );
};

export default BottomBanner;
