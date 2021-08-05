import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/oliver-niblett-wh-7GeXxItI-unsplash.jpg";
import "./SignIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/signin",
        { email, password },
        config
      );
      localStorage.setItem("userinfo", JSON.stringify(data));
      toast.success("SignIn successful!!");
      history.push("/");
    } catch (error) {
      toast.error("Invalid credentials");
      console.log(error);
    }
  };
  return (
    <>
      <div className="signin">
        <form className="form" onSubmit={submitHandler}>
          <label className="label-main">Sign In</label>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Type your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Type your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
          <div className="paragraph">
            <p>
              If new user Please{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default SignIn;
