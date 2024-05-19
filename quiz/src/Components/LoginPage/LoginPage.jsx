import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  <link
    rel="stylesheet"
    href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />;
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
    <>
      <div className="loginp">
        <div className="loginpDetails">
          <h1>Welcome to Gyankosh</h1>
          <p>Login your account</p>
          <button>
            <div className="glogo">
              <img src="./Images/google.png" alt="" />
            </div>
            <p>Login with Google </p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <p>or</p>
          <form onSubmit={handleSubmit}>
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
              <button type="submit">Submit</button>
            </div>
          </form>
          <p>
            Create a new account <NavLink to="/Signup">Signup</NavLink>
          </p>
        </div>
        <img src="./Images/book.jpg" alt="" />
      </div>
    </>
  );
}

export default LoginPage;
