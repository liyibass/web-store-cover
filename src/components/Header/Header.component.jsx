import React from "react";
import "./Header.style.scss";
import Navbar from "./Navbar/Navbar.component";

function Header() {
  return (
    <div className="Header">
      <div className="logoSection">
        <a href="/">
          <i className="far fa-eye brandLogo"></i>
        </a>
      </div>
      <div className="cartSection">
        <i className="far fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-search"></i>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
