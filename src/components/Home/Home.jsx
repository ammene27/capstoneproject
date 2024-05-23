import React from "react";
import "./Home.css";
import restauranfood from "../../assets/images/restauranfood.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="inner-hero-container">
        <div className="hero-text-section">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button>Reserve a Table</button>
        </div>

        <img src={restauranfood} alt="" />
      </div>
    </div>
  );
};

export default Home;
