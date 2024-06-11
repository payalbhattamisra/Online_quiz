import React, { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import "./Profile.css";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const updateUserData = async (updatedData) => {
    console.log("Attempting to update user data:", updatedData);
    try {
      const userDoc = doc(db, "Users", user.uid);
      await updateDoc(userDoc, updatedData);
      setUserData({ ...userData, ...updatedData });
      console.log("User data updated successfully");
      alert("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data: ", error);
      alert("Failed to update user data");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(`Updated ${name} to ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", userData);
    updateUserData(userData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
    <div className="pProfile">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="formContainer">
          <p className="pPara">Update Your Information</p>
          <div className="upInput">
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="upInput">
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="upInput">
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
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
          <div className="upInput">
            <select
              name="role"
              value={userData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Learner">Learner</option>
            </select>
          </div>
          <div className="upInput">
            <input
              name="institute"
              value={userData.institute}
              onChange={handleChange}
              placeholder="Institute"
              required
            />
          </div>
          <div className="upInput">
            <input
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              required
            />
          </div>
          <div className="upInput">
            <input
              name="registrationNumber"
              value={userData.registrationNumber}
              onChange={handleChange}
              placeholder="Registration Number"
              required
            />
          </div>
          <div className="upInput">
            <select
              name="course"
              value={userData.course}
              onChange={handleChange}
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
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <div className="proDetails">
            <div className="proPic">
              <div className="pProfilePic">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="profile-pic"
                  />
                ) : (
                  <div className="profile-initial">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <circle cx="12" cy="12" r="12" fill="#808080" />
                      <circle cx="12" cy="8" r="4" fill="#d3d3d3" />
                      <path
                        fill="#d3d3d3"
                        d="M12 14c-3.333 0-6 2-6 4v2h12v-2c0-2-2.667-4-6-4z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h1>{userData.name}</h1>
            </div>
            <div className="pPinfo">
              <p>Email: {userData.email}</p>
              <p>Gender: {userData.gender}</p>
              <p>Role: {userData.role}</p>
              <p>Institute: {userData.institute}</p>
              <p>Mobile: {userData.mobile}</p>
              <p>Registration Number: {userData.registrationNumber}</p>
              <p>Course: {userData.course}</p>
            </div>
            <button onClick={handleEditClick}>Change Information</button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Profile;
