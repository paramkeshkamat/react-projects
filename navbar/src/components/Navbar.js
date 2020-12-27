import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import links from "../data";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="Navbar">
      <div className="header">
        <Link to="/">
          <h1 className="logo">Logo</h1>
        </Link>
        <button
          className="hamburger"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <MenuRoundedIcon />
        </button>
      </div>

      <nav className={showNavbar ? "toggle-nav" : ""}>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavLink exact to={url} activeClassName="active-nav">
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
