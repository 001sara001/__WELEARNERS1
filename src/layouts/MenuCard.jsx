// MenuCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCard.css'; // Import CSS file

const MenuCard = (props) => {
  return (
    <div className="menu-card">
      <div>
        <img className="rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className="card-content">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{props.title}</h3>
          <h3 className="font-semibold text-xl">{props.value}</h3>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div className="button-container">
            <Link to="/Enroll">
              <button>
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
