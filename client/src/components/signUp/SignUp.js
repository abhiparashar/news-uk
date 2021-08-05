import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/oliver-niblett-wh-7GeXxItI-unsplash.jpg";
import "./SignUp.css";
const SignUp = () => {
  const [name, setName] = useState("");
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
        "http://localhost:5000/api/signup",
        { name, email, password },
        config
      );
      localStorage.setItem("userinfo", JSON.stringify(data));
      toast.success(`Hey ${name}, Welcome to News Live`);
      history.push("/");
    } catch (error) {
      toast.error("Credentials already taken");
      console.log(error);
    }
  };
  return (
    <>
      <div className="signup">
        <form className="form" onSubmit={submitHandler}>
          <label className="label-main">Sign Up</label>
          <label className="label">Name</label>
          <input
            type="name"
            placeholder="Type your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
              If already a user Please{" "}
              <Link to="/signin" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default SignUp;
