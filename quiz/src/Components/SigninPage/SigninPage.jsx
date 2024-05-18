import React from "react";
import { NavLink } from "react-router-dom";
import "./SigninPage.css";

function SigninPage() {
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    const navigateToSignup=()=>{
        window.location.href='./SignupWithEmail'
    };
  return (

    <>
      <div className="signp">
        <div className="signpDetails">
          <h2>Welcome to Gyankosh</h2>
          <p>Create a free account in 2 steps</p>
          <button >
          <i class="fa-brands fa-google" style={{ color: "#B197FC" }}></i>
          Continue with Google
            </button>
          <button onClick={navigateToSignup}>
          <i class="fa-regular fa-envelope" style={{ color: "#B197FC" }}></i>
            Continue with Email
            </button>
          <p>
            By signing up, you agree to our Terms of Service & Privacy Policy
          </p>
          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
        <div className="signpPic">
          <img src="./Images/book.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default SigninPage;
