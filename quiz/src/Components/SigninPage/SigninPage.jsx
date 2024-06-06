import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { db, signInWithGoogle, auth } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SigninPage.css";

function SigninPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [institute, setInstitute] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [course, setCourse] = useState("");
  const [isGoogleSignUp, setIsGoogleSignUp] = useState(false);

  const checkIfUserExists = async (email) => {
    const userDoc = await getDoc(doc(db, "Users", email));
    return userDoc.exists();
  };

  const handleGoogleSignUp = async () => {
    try {
      const user = await signInWithGoogle();
      const email = user.email;

      const userExists = await checkIfUserExists(email);
      if (userExists) {
        alert("You already have an account with this email.");
        return;
      }

      setName(user.displayName);
      setEmail(email);
      setIsGoogleSignUp(true);
      setShowForm(true);
    } catch (error) {
      console.error("Error during Google sign-up: ", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userExists = await checkIfUserExists(email);
      if (userExists) {
        alert("You already have an account with this email.");
        return;
      }

      if (!isGoogleSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      const userDoc = {
        name,
        gender,
        role,
        institute,
        mobile,
        email,
        registrationNumber,
        course,
        uid: email,
      };
      await setDoc(doc(db, "Users", email), userDoc);

      setName("");
      setGender("");
      setRole("");
      setInstitute("");
      setMobile("");
      setEmail("");
      setPassword("");
      setRegistrationNumber("");
      setCourse("");
      setShowForm(false);
      alert("Sign-up successful!");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error during form submission: ", error);
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
            <button onClick={handleGoogleSignUp}>
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
            <form onSubmit={handleFormSubmit}>
              <div className="signInput">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Name"
                  readOnly={isGoogleSignUp}
                />
              </div>
              <div className="signInput">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
              {role === "Learner" && (
                <div className="signInput">
                  <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Course
                    </option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.E">B.E</option>
                    <option value="B.Arch">B.Arch</option>
                    <option value="B.Com">B.Com</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                    <option value="LLB">LLB</option>
                    <option value="MBBS">MBBS</option>
                    <option value="B.Pharm">B.Pharm</option>
                    <option value="BDS">BDS</option>
                    <option value="BHM">BHM</option>
                    <option value="Diploma">Diploma</option>
                    <option value="ITI">ITI</option>
                    <option value="D.Pharma">D.Pharma</option>
                  </select>
                </div>
              )}
              <div className="signInput">
                <input
                  type="text"
                  id="institute"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                  required
                  placeholder="Institute Name"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="registration-number"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  required
                  placeholder="Registration Number"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  placeholder="Mobile Number"
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
                  readOnly={isGoogleSignUp}
                />
              </div>
              {!isGoogleSignUp && (
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
              )}
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
