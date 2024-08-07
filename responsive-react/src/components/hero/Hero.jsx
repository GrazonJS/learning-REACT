import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>This is a Responsive website using React JS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          in, odio, qui voluptates nihil ducimus dolor sequi voluptatum
          accusamus rem cum aliquid voluptatibus optio provident dicta quidem
          laboriosam ullam quis!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
