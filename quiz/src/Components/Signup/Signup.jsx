import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [institute, setInstitute] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [course, setCourse] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: name,
          gender: gender,
          role: role,
          fieldOfStudy: role === "Learner" ? course : "",
          institute: institute,
          registrationNumber: registrationNumber,
          mobile: mobile,
          email: user.email,
        });
      }
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
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
        <div>
          <label htmlFor="role">Role</label>
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
          <div>
            <label htmlFor="course">Course</label>
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
        <div>
          <label htmlFor="institute">Institute Name</label>
          <input
            type="text"
            id="institute"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            required
            placeholder="Institute Name"
          />
        </div>
        <div>
          <label htmlFor="registration-number">Registration Number</label>
          <input
            type="text"
            id="registration-number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
            placeholder="Registration Number"
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            placeholder="Mobile Number"
          />
        </div>
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
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
};

export default Signup;
