import React from "react";
import "./Footer.css";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterTop = () => {
  return (
    <footer className="footer-top">
      <div className="footer-column">
        <ul>
          <li className="heading-foot">PRODUCTS</li>
          <li>Footwear</li>
          <li>Clothing</li>
          <li>Accessories</li>
          <li>Outlet - Sale</li>
          <li>New Arrivals</li>
          <li>Special Offer</li>
          <li>Flat 50% Off!</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li className="heading-foot">SPORTS</li>
          <li>CRICKET</li>
          <li>Running</li>
          <li>Football</li>
          <li>Gym/Training</li>
          <li>Tennis</li>
          <li>Outdoor</li>
          <li>Basketball</li>
          <li>Swimming</li>
          <li>Skateboarding</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li className="heading-foot">COLLECTIONS</li>
          <li>Ultraboost</li>
          <li>Superstar</li>
          <li>NMD</li>
          <li>Stan Smith</li>
          <li>Sustainability</li>
          <li>Predator</li>
          <li>Parley</li>
          <li>Adicolor</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li className="heading-foot">SUPPORT</li>
          <li>Help</li>
          <li>Customer Services</li>
          <li>Returns &amp; Exchanges</li>
          <li>Shipping</li>
          <li>Order Tracker</li>
          <li>Store Finder</li>
          <li>adiClub</li>
          <li>adiclub Terms and conditions</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li className="heading-foot">COMPANY INFO</li>
          <li>About Us</li>
          <li>adidas Stories</li>
          <li>adidas Apps</li>
          <li>Entity Details</li>
          <li>Press</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li className="heading-foot">FOLLOW US</li>
          <li ><FaSquareInstagram className="icon-insta"/>
          </li>
        </ul>
      </div>
      
    </footer>
  )
}

export default FooterTop