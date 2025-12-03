import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../images/choosinghouse.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">✨ Welcome to the Improved Rent-A-Room! ✨</h1>
          <p className="hero-subtitle">
            This homepage has been updated to test the CI/CD pipeline.
          </p>
          <Link to="/rooms">
            <button className="cta-button">
              View Rooms
              <span className="arrow">→</span>
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={BannerImage} alt="Room illustration" />
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Pipeline Test</h3>
          <p>This change should trigger a new pipeline execution.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Updated UI</h3>
          <p>Small UI updates to verify frontend deployment.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3>Dev Tools</h3>
          <p>Ensuring our CI/CD workflow works correctly.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
