import React from "react";
import homebg from "../../assets/homebg.png"
import "./home-img-style.css"

const Homeimg = () => {
  return (
    <div id="home">
      <img className="d-block w-100 custom-img" src={homebg} alt="Home Background" />
    </div>
  );
};

export default Homeimg;