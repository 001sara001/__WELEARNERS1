// ProductCard.jsx
import React from "react";
import Button from "../layouts/Button";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./ProductCard.css"; // Import your CSS file

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="rounded-lg" src={props.img} alt="img" />
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="stars">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <h3 className="font-semibold text-lg">Free</h3>
        <Button title="Take Tests" />
      </div>
    </div>
  );
};

export default ProductCard;
