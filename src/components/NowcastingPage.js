// components/NowcastingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NowcastingPage.css";
import Header from "./Header";
import Footer from "./Footer";

function NowcastingPage() {
  return (
    <div className="nowcasting-page">
      <Header />
      <div className="nowcasting-content">
        <h2>Nowcasting System</h2>
        <p>
          This page will contain the Nowcasting feature which will be
          implemented later.
        </p>
        <div className="placeholder-content">
          <div className="placeholder-box">
            <h3>Nowcasting Features Coming Soon</h3>
            <p>
              The nowcasting system will provide short-term weather forecasts
              (0-6 hours) using the latest satellite and radar data.
            </p>
          </div>
        </div>
        <Link to="/" className="back-link">
          Return to Main Page
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NowcastingPage;
