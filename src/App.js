// App.js - Main Application Component
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="nav-link-container">
                  <a
                    href="https://nowcast-psi.vercel.app/"
                    className="nowcasting-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Nowcasting Page
                  </a>
                </div>
                <MainContent />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
