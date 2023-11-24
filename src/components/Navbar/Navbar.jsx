import React, { Fragment } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => (
  <>
    <p>
      <a href="#">Learn</a>
    </p>
    <p>
      <a href="#test2">Resources</a>
      <IoIosArrowDown />
    </p>
    <p>
      <a href="#test2">FAQs</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_navbar-links">
        <a href="#hero">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbar_navbar-links_items">
          <Menu />
        </div>
      </div>

      <button className="navbar_button">Install Kobodrop</button>
    </div>
  );
};

export default Navbar;
