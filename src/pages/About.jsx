import React from "react";
import about from "../assets/about.svg";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="about-show">
        <div className="about-left">
          <img src={about} alt="" />
        </div>

        <div className="about-right">
          <h5>About us</h5>
          <h2>
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </h2>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <button>Read More</button>
        </div>
      </section>
    </div>
  );
};

export default About;
