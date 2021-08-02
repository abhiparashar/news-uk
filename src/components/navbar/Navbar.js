import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/download.png";

const Navbar = () => {
  const clickHandler = (e)=>{
    e.preventDefault()
    console.log('abhishek');
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src={image} alt="" />
      </Link>
      <div className="search">
        <input type="text" placeholder="search anything..."/>
        <label onSubmit={clickHandler}><i class="fas fa-search"></i></label>
      </div>
      <Link to="/logout" style={{textDecoration:"none"}}>
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default Navbar;
