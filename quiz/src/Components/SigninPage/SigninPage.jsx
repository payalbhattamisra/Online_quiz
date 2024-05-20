import React from "react";
import { NavLink } from "react-router-dom";
import "./SigninPage.css";

function SigninPage() {


  const navigateToSignup = () => {
    window.location.href = "./SignupWithEmail";
  };
  return (
    <>
    <link
    rel="stylesheet"
    href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />;
      <div className="signp">
        <div className="signpDetails">
          <h1>Welcome to Gyankosh</h1>
          <p>Create a free account in 2 steps</p>
          <button onClick={navigateToSignup}>
            <i
              class="fa-regular fa-envelope"
              style={{ color: "rgba(0, 0, 0, 0.433)" }}
            ></i>
            <p>Continue with Email</p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <p>or</p>
          <button>
            <div className="glogo">
              <img src="./Images/google.png" alt="" />
            </div>
            <p>Continue with Google </p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <p>
            By signing up, you agree to our{" "}
            <NavLink to="/">Terms of Service</NavLink> &{" "}
            <NavLink to="/">Privacy Policy</NavLink>
          </p>
          <p>
            Already have an account? <NavLink to="/Loginp">Login</NavLink>
          </p>
        </div>
        <img src="./Images/book.jpg" alt="" />
      </div>
    </>
  );
}

export default SigninPage;
