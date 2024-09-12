import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import './Breadcrumb.css'
import { RiCornerUpLeftFill } from "react-icons/ri";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <span className="back-link"><RiCornerUpLeftFill />
       BACK</span>
      <span className="breadcrumb-links">
        <Link to="/">Home</Link> / Outlet
      </span>
    </div>
  );
};

export default Breadcrumb;
