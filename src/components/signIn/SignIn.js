import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="signin">
        <form className="form" onSubmit={submitHandler}>
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
        </form>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default SignIn;
