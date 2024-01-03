import React, { Fragment, useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import InstallKobodrop from "../Install-Kobodrop";
import { Link } from "react-router-dom";
import UserContext from "../../context";

const Menu = () => (
  <>
    <p>
      <a href="#1">Learn</a>
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
  const user = useContext(UserContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navbar_navbar-links">
        <a href="#hero">
          <img src={logo} alt="logo" />
          {user.date}
        </a>
        <div className="navbar_navbar-links_items">
          <Menu />
        </div>
      </div>
      {/* www.save.com/installkopbodrop */}
      <Link to="/installkobodrop">
        <button className="navbar_button">Install Kobodrop</button>
      </Link>

      <div className="navbar_menu_mobile">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={toggle} />
        ) : (
          <RiMenu3Fill size={27} onClick={toggle} />
        )}
        {toggleMenu && (
          <div className="navbar_menu-mobile-container">
            <div className="navbar_menu-mobile-list">
              <Menu />
              <button className="navbar_button_mobile">Install Kobodrop</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
