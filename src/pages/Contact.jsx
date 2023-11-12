import React from "react";
import deliver1 from "../assets/deliver1.svg"
import deliver2 from "../assets/deliver2.svg"
import deliver3 from "../assets/deliver3.svg"
import "./contact.css"



const Contact = () => {
  return (
    <div>
        <h5>FEATURES</h5>
      <h2>Food with a New Passion</h2>
      <div className="contact-cards">
        <div className="contact-card">
        <img src={deliver2} alt="" />
        <h3>Quality Food</h3>
        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
        </div>
        <div className="contact-card">
        <img src={deliver3} alt="" />
        <h3>Food Delivery</h3>
        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
        </div>
        <div className="contact-card">
        <img src={deliver1} alt="" />
        <h3>Super Taste</h3>
        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
