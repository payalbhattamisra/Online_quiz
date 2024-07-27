import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [user, setUser] = useState(null);
  const [isResetMode, setIsResetMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    
    <div className="loginp">
           <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <div className="loginpDetails">
        {!isResetMode ? (
          <>
            <h1>Welcome to Gyankosh</h1>
            <p className="loginpDetailsPara">Login to your account</p>
            {/* ................ */}
            <button className="loginDbtn" onClick="/">
              <div className="glogo">
                <img src="./Images/google.png" alt="Google logo" />
              </div>
              <p>Login with Google</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <p>or</p>
            {/* .................. */}
            <form onSubmit="/">
              <div className="logInput">
                <input
                  type="email"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>
              <div className="logInput logInPass">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <button
                className="hideBtn"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
              <div className="fogp">
                <NavLink
                  onClick={() => {
                    setResetEmail(email);
                    setIsResetMode(true);
                  }}
                >
                  Forgot Password
                </NavLink>
              </div>
              <div className="lgnBtn">
                <button type="submit">Login</button>
              </div>
            </form>
            <p>
              Create a new account <NavLink to="/Signup">Signup</NavLink>
            </p>
          </>
        ) : (
          <>
            <h2 className="resHeading">Reset Password</h2>
            <p className="resPara">
              Enter your email address to receive a password reset link
            </p>
            <div className="resinput">
              <input
                className="resInput"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
            {/* ....................... */}
            <button className="resBtn1" onClick="/">
              Send Reset Link
            </button>
            <div className="btLogin">
              Back to{" "}
              <NavLink onClick={() => setIsResetMode(false)}>Login</NavLink>
            </div>
          </>
        )}
      </div>
      <img src="./Images/book.jpg" alt="Book" />
    </div>
  );
}

export default LoginPage;
