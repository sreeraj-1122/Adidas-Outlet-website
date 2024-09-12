import React, { useState, useEffect } from "react";
import "./Top.css";
import { FaAngleDown } from "react-icons/fa6";

const Top = () => {
  const messages = [
    "EXTRA 5% OFF ON PREPAID ORDERS",
    "SIGN UP & GET 15% OFF",
    "FREE DELIVERY, RETURN & EXCHANGE",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [messages.length]);

  return (
    <div className="top-banner">
      <div>{messages[currentMessageIndex]}</div>
      <span>
        <FaAngleDown className="down-icon"/>
      </span>
    </div>
  );
};

export default Top;
