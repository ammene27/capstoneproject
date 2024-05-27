import React from "react";
import "./Home.css";
import restauranfood from "../../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="inner-hero-container">
        <div className="hero-text-section">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Owning a restaurant in Chicago is like being part of a vibrant
            culinary symphony. The city's dining scene is a beautiful cacophony
            of flavors, cultures, and traditions, each dish adding its unique
            note to the melody of gastronomy.
          </p>
          <button>
            <Link to="/bookingPage" className="nav-item">
              Reserve a Table
            </Link>
          </button>
        </div>
        <img id="restaurantimg" src={restauranfood} alt="" />
      </div>
    </div>
  );
};

export default Home;
