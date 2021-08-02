import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import "./SignUp.css"
const SignUp = () => {
  const history = useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    axios.post("http://localhost:5000/api/signup",data).then(console.log('sent successfully')).catch(err=>console.log(err))
  };
  history.push("/")
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
      <label>Name</label>
        <input
          type="name"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Type your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
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
    </>
  );
};

export default SignUp;
