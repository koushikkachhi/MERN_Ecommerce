import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.jpg";

const Offers = () => {
  return (
    <div className="offers">
        <img src={exclusive_image} alt="About Us" className="image" />
    </div>
  );
};

export default Offers;
