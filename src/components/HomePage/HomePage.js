import React from "react";
import { Nav } from "../Navbar/Nav";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Menu />
      <Testimonials />
    </div>
  );
};

export default HomePage;
