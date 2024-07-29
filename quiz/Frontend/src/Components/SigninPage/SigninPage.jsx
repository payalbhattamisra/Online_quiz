import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SigninPage.css";
import axios from "axios";

function SigninPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [profilepic, setProfilepic] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [preview, setPreview] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfilepic(file);

    // Show a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profilepic', profilepic);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('fullname', fullname);
    formData.append('role', role);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/api/g1/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Signup successful:', response.data);
      alert("Sign-up successful!");
      navigate("/Dashboard");
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <div className="signp">
        {!showForm && (
          <div className="signpDetails">
            <h1>Welcome to Gyankosh</h1>
            <p>Create a free account in 2 steps</p>
            <button onClick={() => setShowForm(true)}>
              <i
                className="fa-regular fa-envelope"
                style={{ color: "rgba(0, 0, 0, 0.433)" }}
              ></i>
              <p>Continue with Email</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <p>or</p>
            <button onClick="/">
              <div className="glogo">
                <img src="./Images/google.png" alt="Google logo" />
              </div>
              <p>Continue with Google</p>
              <i className="fa-solid fa-arrow-right"></i>
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
        )}
        {showForm && (
          <div className="formContainer">
            <p className="siginPara">Enter the Correct Information</p>
            <form onSubmit={handleSubmit}>
              <div className="fileInput">
                <input
                  type="file"
                  id="profilepic"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {preview && (
                  <img src={preview} alt="Preview" style={{ width: "200px" }} />
                )}
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
              </div>
              <div className="signInput">
                <input
                  type="email"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className="signInput">
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="Learner">Learner</option>
                </select>
              </div>
              <div className="signInput">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit">Sign up</button>
            </form>
            <p className="retToSignP">
              Already have an account? <NavLink to="/Loginp">Login</NavLink>
            </p>
          </div>
        )}
        <img src="./Images/book.jpg" alt="Books" />
      </div>
    </>
  );
}

export default SigninPage;
