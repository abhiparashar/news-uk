import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/download.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={image} alt="" />
      </Link>
      <Link to="/logout" style={{textDecoration:"none"}}>
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default Navbar;
