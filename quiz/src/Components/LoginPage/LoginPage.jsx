import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  <link
    rel="stylesheet"
    href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />;

  const navigateToLogin = () => {
    window.location.href = "./LoginWithEmail";
  };
  return (
    <>
      <div className="loginp">
        <div className="loginpDetails">
          <h1>Welcome to Gyankosh</h1>
          <p>Login your account</p>
          <button onClick={navigateToLogin}>
            <i
              class="fa-regular fa-envelope"
              style={{ color: "rgba(0, 0, 0, 0.433)" }}
            ></i>
            <p>Login with Email</p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <p>or</p>
          <button>
            <div className="glogo">
              <img src="./Images/google.png" alt="" />
            </div>
            <p>Login with Google </p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
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
