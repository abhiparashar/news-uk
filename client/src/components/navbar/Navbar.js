import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/download.png";
import Logout from "../logout/Logout";

const Navbar = ({ searchTerm }) => {
  const [term, setTerm] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    searchTerm(term);
    setTerm("");
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
      <Logout />
    </div>
  );
};

export default Navbar;
