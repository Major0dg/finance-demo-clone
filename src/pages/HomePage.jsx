import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../containers/Hero/HeroSection";
import Features from "../containers/features/Features";
import MyForm from "../components/Form";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeroSection />
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
