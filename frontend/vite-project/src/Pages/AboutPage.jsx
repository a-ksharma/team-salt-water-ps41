import React from 'react'
import Navbar from "../PageComponents/Navbar.jsx";
import Vector from "../assets/Vector.png";

const AboutPage=()=> {
  return (
    <div className="home-container">
      <Navbar/>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <p className="primary-text">
          <b>OUR MISSION</b>
        </p>
        <p className="primary-text">
          To create a unified digital platform that brings together oceanographic, fisheries, and molecular biodiversity data into one intelligent system. By combining AI, machine learning, and interactive visualizations, we aim to help scientists, policymakers, and communities make better decisions for the future of our oceans.
        </p>
      </div>
      <div className="image-container">
        <img src={Vector} alt="not found" className="bottom-image" />
      </div>
       
    </div>
  )
}

export default AboutPage;
