// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-logo">WeLearners</h1>
          <nav className="navbar-nav md:flex hidden">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer"
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer"
              onClick={closeMenu}
            >
              Tests
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer"
              onClick={closeMenu}
            >
              Reviews
            </Link>
          </nav>
        </div>

        <div className="navbar-right lg:flex hidden">
          <Button title="Change mode" />
        </div>

        <div className="navbar-mobile lg:hidden">
          {menu ? (
            <div className="navbar-mobile-content">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="products"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Tests
              </Link>
              <Link
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Button title="Change mode" />
              <AiOutlineClose
                size={25}
                className="navbar-mobile-close"
                onClick={handleChange}
              />
            </div>
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              className="navbar-mobile-icon"
              onClick={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
