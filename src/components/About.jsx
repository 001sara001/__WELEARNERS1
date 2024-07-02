// About.jsx
import React from "react";
import img from "../assets/img/about.jpeg";
import Button from "../layouts/Button";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>

      <div className="content">
        <div className="image-container">
          <img className="image" src={img} alt="img" />
        </div>
        <div className="text-container">
          <h2 className="font-semibold text-3xl">What Makes Our Website Special?</h2>
          <p>
            Learning a new language is a productive thing. Our website provides an environment
            to learn a new language. Along with interactive lessons and progress tracking,
            it also allows users to take exams on the topics they have learned.
          </p>
          <p>
            Moreover, our website is completely free of cost and anyone with an email can join.
            It is open for everyone.
          </p>

          <div className="button-container">
            <Button title="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
