import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [user, setUser] = useState(null);
  const [isResetMode, setIsResetMode] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      navigate("/Deshbord");
    } catch (error) {
      console.error("Error logging in with email and password:", error);
      if (error.code === "auth/user-not-found") {
        alert("Incorrect email. Please try again or sign up if you don't have an account.");
      } else if (error.code === "auth/wrong-password"){
        alert("Incorrect password.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Signed in with Google:", result.user);
      navigate("/Deshbord");
    } catch (error) {
      console.error("Error during sign in with Google", error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      console.log("Password reset email sent");
      alert("Password reset email sent. Please check your inbox.");
      setIsResetMode(false); // Exit reset mode after sending the email
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Error sending password reset email. Please try again.");
    }
  };

  return (
    <div className="loginp">
      <div className="loginpDetails">
        {!isResetMode ? (
          <>
            <h1>Welcome to Gyankosh</h1>
            <p className="loginpDetailsPara">Login to your account</p>
            <button className="loginDbtn" onClick={handleSignIn}>
              <div className="glogo">
                <img src="./Images/google.png" alt="" />
              </div>
              <p>Login with Google</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <p>or</p>
            <form onSubmit={handleSubmit}>
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
              <div className="logInput">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
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
              <div>
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
            <button className="resBtn1" onClick={handlePasswordReset}>
              Send Reset Link
            </button>
            <div className="btLogin">
              Back to{" "}
              <NavLink onClick={() => setIsResetMode(false)}>Login</NavLink>
            </div>
          </>
        )}
      </div>
      <img src="./Images/book.jpg" alt="" />
    </div>
  );
}

export default LoginPage;
