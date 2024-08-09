import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non,
          libero distinctio temporibus magni quia iste nesciunt autem veritatis
          saepe. Quidem alias, delectus obcaecati minima commodi praesentium
          temporibus incidunt ad.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit odit commodi consequuntur architecto mollitia adipisci,
          delectus magni nobis maiores autem
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus nostrum facere consectetur dolor, expedita et accusantium
          veniam? Quia, culpa delectus. Repellendus voluptate voluptas amet
          inventore sequi quibusdam fuga perspiciatis!
        </p>
      </div>
    </div>
  );
};

export default About;
