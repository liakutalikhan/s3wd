import React, { useState, useEffect } from "react";
import Logo from "./images/s3wd-white.png";
import MenuIcon from '@material-ui/icons/Menu';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {


const [navBg, setNavBg] = useState("header_bg")

const whileScroll = () => {
    window.scrollY > 10
      ? setNavBg("nav_bg_change")
      : setNavBg("header_bg")
  }

useEffect(() => {
  window.addEventListener("scroll", whileScroll)
})

  return (
    <>
      <header>
        <div className={navBg}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="brand_logo" to="/">
                  <img src={Logo} alt="s3wd Logo"></img>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                    <MenuIcon/>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="Active_nav"
                        className="nav-link"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="Active_nav"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="Active_nav"
                        className="nav-link"
                        to="/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="Active_nav"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;


document.addEventListener("scroll", function (e) {
    console.log("scrolling engage");
    if (e.detail > 0) {
        // do things ...
    }
    return false;
}, true);
