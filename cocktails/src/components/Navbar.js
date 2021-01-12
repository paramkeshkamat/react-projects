import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <header>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
