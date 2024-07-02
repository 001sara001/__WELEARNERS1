// Home.jsx
import React from "react";
import img from "../assets/img/logo.jpeg";
import Button from "../layouts/Button";
import "./Home.css"; // Import CSS file
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Start learning language with WeLearners.</h1>
        <p className="text">
          Embark on a language learning journey and be productive for a better future.
        </p>
        {/* <div className="buttons">
        <Link to="/Login">
              <button>
                Login
              </button>
            </Link>
            <Link to="/Register">
              <button>
                Register
              </button>
            </Link>  
        </div> */}
        
        <div className="buttons">
          <Button title="Login" />
          <Button title="Register" />
        </div>
      </div>

      <div className="relative-container">
        <img src={img} alt="img" />

        <div className="absolute-top-right">
          <h2 className="font-semibold">Language</h2>
        </div>

        <div className="absolute-bottom-left">
          <h2 className="font-semibold">Learning</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
