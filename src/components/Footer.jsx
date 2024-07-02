// Footer.jsx
import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content flex flex-col md:flex-row justify-between px-8 md:px-32">
        <div className="footer-section">
          <h1 className="footer-title">WeLearners</h1>
          <p className="text-sm">
            Welcome to WeLearners! Explore our language courses, exams, 
            and discover the perfect language to elevate your language skills.
          </p>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">Links</h1>
          <nav className="footer-links flex flex-col gap-2">
            <a href="/">Courses</a>
            <a href="/">About Us</a>
            <a href="/">Tests</a>
            <a href="/">Reviews</a>
          </nav>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">Course</h1>
          <nav className="footer-links flex flex-col gap-2">
            <a href="/">Bangla</a>
            <a href="/">English</a>
            <a href="/">Japanese</a>
            <a href="/">Turkish</a>
            <a href="/">Korean</a>
          </nav>
        </div>
        <div className="footer-section">
          <h1 className="footer-title">Contact Us</h1>
          <nav className="footer-links flex flex-col gap-2">
            <a href="/">Welearners@email.com</a>
            <a href="/">+84 958 248 966</a>
            <a href="/">Social media</a>
          </nav>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          @copyright developed by
          <span className="text-backgroundColor"> champion programmers </span>
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
