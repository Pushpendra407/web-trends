import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logo" height="35px" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/portfolio"
              onClick={closeMenu}
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/skills"
              onClick={closeMenu}
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/about"
              onClick={closeMenu}
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/testimonials"
              onClick={closeMenu}
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/contactme"
              onClick={closeMenu}
              className="navbar--content"
            >
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
