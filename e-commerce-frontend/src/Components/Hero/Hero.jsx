import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.jpg";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
const Hero = () => {
  function handleSearch(){

  }
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NaariWellness</h2>
        <div>
          <div className="hero-hand-icon">
            <p>One step</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Towards an easy</p>
          <p>period journey</p>
        </div>
        
          <a href="womens" className="hero-latest-btn">Recycle Now</a>
          <img src={arrow_icon} alt="" />
        
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
