// components/Header.js
import React from "react";
import "../styles/Header.css";
import logoImg from "../assets/logo-imd.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <img src={logoImg} alt="IMD Logo" className="logo" />
        <div className="header-text">
          <h1>INDIA METEOROLOGICAL DEPARTMENT</h1>
          <h2>Ministry of Earth Sciences</h2>
          <h3>EUMETCAST Images and Products</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
