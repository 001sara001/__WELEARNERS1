// Menu.jsx
import React from "react";
import img1 from "../assets/img/eng.jpeg";
import img2 from "../assets/img/bangla.jpeg";
import img3 from "../assets/img/jp.jpeg";
import img4 from "../assets/img/turkish.jpeg";
import img5 from "../assets/img/ko.jpeg";
import MenuCard from "../layouts/MenuCard";
import "./Menu.css"; // Import CSS file

const Menu = () => {
  return (
    <div className="container">
      <h1 className="title">Courses</h1>

      <div className="card-container">
        <MenuCard img={img1} title="English" />
        <MenuCard img={img2} title="Bangla" />
        <MenuCard img={img3} title="Japanese" />
        <MenuCard img={img4} title="Turkish" />
        <MenuCard img={img5} title="Korean" />
      </div>
    </div>
  );
};

export default Menu;
