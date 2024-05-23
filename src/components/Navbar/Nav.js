import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <img src={require("../../images/Logo .svg").default} alt="mySvgImage" />
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/about" className="nav-item">
          about
        </Link>
        <Link to="/orderOnline" className="nav-item">
          Order Online
        </Link>
        <Link to="/bookingPage" className="nav-item">
          Reservations
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </nav>
    </div>
  );
};
