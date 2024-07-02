// ReviewCard.jsx
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./ReviewCard.css"; // Import your CSS file

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <div className="avatar">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className="info">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="stars">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf className="text-brightColor" />
          </div>
        </div>
        <span className="quote-icon">
          <FaQuoteRight className="text-backgroundColor" size={42} />
        </span>
      </div>
      <p>
        This website is very good for learning a language.
        Nice way to spend our free time. I enjoyed a lot learning it.
      </p>
    </div>
  );
};

export default ReviewCard;
