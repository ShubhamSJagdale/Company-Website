import React from "react";

import HeroSection from "../Layout_Blocks/HeroSection";
import about from "../assets/about.svg";
const About = () => {
  return (
    <HeroSection
      name="Welcome to About page"
      imagesrc={about}
      visit="/contact"
      btnname="Contact Now"
    />
  );
};

export default About;
