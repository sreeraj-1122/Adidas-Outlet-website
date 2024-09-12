import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <MdMenu className="menu"/>
      </div>

      <div className="logo-wrapper">
        <Link to="/">
          <img src="./Adidas_logo.png" alt="adidas" className="image-adidas" />
        </Link>
      </div>

      <div className="right-nav">
        <ul className="links-nav-upper-wrapper">
          <li className="links-nav-upper">
            <a href="#">help</a>
          </li>

          <li className="links-nav-upper">
            <a href="#">order and returns</a>
          </li>
          <li className="links-nav-upper">
            <Link to="/signup">sign up</Link>
          </li>
          <li className="links-nav-upper">
            <Link to="/login">log in</Link>
          </li>
        </ul>

        <div className="links-nav-bottom-wrapper">
          <ul className="nav-adidas">
            <li className="links-nav men">
              <Link to="/men">
                <h5>MEN</h5>
              </Link>
              <div className="animation-nav"></div>
              <div className="hidden-nav-drop-men">{/* <NavHover /> */}</div>
            </li>
            <li className="links-nav women">
              <Link to="/women">
                <h5>WOMEN</h5>
              </Link>
              <div className="animation-nav"></div>
              <div className="hidden-nav-drop-women">{/* <NavHover /> */}</div>
            </li>
            <li className="links-nav kids">
              <Link to="/kids">
                <h5>KIDS</h5>
              </Link>
              <div className="animation-nav">{/* <NavHover /> */}</div>
            </li>
            <li className="links-nav sports">
              <a href="#">
                <div>SPORTS</div>
              </a>
              <div className="animation-nav"></div>
            </li>
            <li className="links-nav brands">
              <a href="#">
                <div>LIFESTYLE</div>
              </a>
              <div className="animation-nav">{/* <NavHover /> */}</div>
            </li>
            <li className="links-nav collections">
              <a href="#">
                <h5>SALE</h5>
              </a>
              <div className="animation-nav">{/* <NavHover /> */}</div>
            </li>
          </ul>

          <ul className="icon-link-nav">
            <li className="search-nav">
              <div className="search-input-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                />
                <span>
                  <AiOutlineSearch className="search-icon" />
                </span>
              </div>
            </li>
            <li className="icon-link">
                <div className="number-badge">1</div>
              <Link to="/profile">
                <AiOutlineUser />
              </Link>
            </li>
            <li className="icon-link">
              <a href="#" className="faviourate">
                <FiHeart />
              </a>
            </li>
            <li className="icon-link">
              <a href="#">
                <AiOutlineShopping />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
