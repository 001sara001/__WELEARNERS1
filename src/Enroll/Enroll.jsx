// Enroll.jsx or Enroll.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Enroll.css'; // Import your CSS file

const Enroll = () => {
  return (
    <div className="container">
      <h1 className="h1">Enroll Page</h1>
      <div className="levels">
        <Link className="button" to="/Easy">Easy</Link>
        <Link className="button" to="/Medium">Medium</Link>
        <Link className="button" to="/Advanced">Advanced</Link>
      </div>
    </div>
  );
};

export default Enroll;
