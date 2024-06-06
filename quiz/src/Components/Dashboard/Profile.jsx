import React from "react";

const Profile = ({ user, handleLogout }) => (
  <>
    <h1>Welcome, {user.name}</h1>
    <p>Email: {user.email}</p>
    <p>Gender: {user.gender}</p>
    <p>Role: {user.role}</p>
    <p>Institute: {user.institute}</p>
    <p>Mobile: {user.mobile}</p>
    <p>Registration Number: {user.registrationNumber}</p>
    <p>Course: {user.course}</p>
    <button onClick={handleLogout}>Logout</button>
  </>
);

export default Profile;


