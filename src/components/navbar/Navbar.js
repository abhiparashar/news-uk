import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/download.png";

const Navbar = ({searchTerm}) => {
  const [term, setTerm] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(term);
    searchTerm(term)
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={image} alt="" />
      </Link>
      <div className="search">
        <form onSubmit={clickHandler}>
          <input
            type="text"
            placeholder="search anything..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
      <Link to="/logout" style={{ textDecoration: "none" }}>
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default Navbar;
