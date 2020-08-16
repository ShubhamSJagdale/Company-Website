import React from "react";
import home_page from "../assets/home_page.svg";
import { NavLink } from "react-router-dom";
import HeroSection from "../Layout_Blocks/HeroSection";
const Home = () => {
  return (
    <HeroSection
      name="Grow your Business with"
      imagesrc={home_page}
      visit="/service"
      btnname="Get Started"
    />
  );
};

export default Home;
