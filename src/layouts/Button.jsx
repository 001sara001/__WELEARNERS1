// Button.jsx
import React from "react";
import "./Button.css"; // Import CSS file

const Button = (props) => {
  return (
    <div>
      <button className="button">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
