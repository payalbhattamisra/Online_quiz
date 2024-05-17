import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

import './Login.css'

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/signup");
      
    } catch (error) {
      console.log(error.message); 
    }
  };

  return (
    <div className="login">

    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

      <div>
        <button type="submit" >
          Submit
        </button>
      </div>
    </form>
      <p>
        New user <NavLink to="./Signup">Signup</NavLink>
      </p>
          </div>
  );
}

export default Login;