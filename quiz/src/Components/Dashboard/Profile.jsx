import React, { useState } from "react";
import { db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const updateUserData = async (updatedData) => {
    console.log('Attempting to update user data:', updatedData);
    try {
      const userDoc = doc(db, 'Users', user.uid);
      await updateDoc(userDoc, updatedData);
      setUserData({ ...userData, ...updatedData });
      console.log('User data updated successfully');
      alert('User data updated successfully');
    } catch (error) {
      console.error("Error updating user data: ", error);
      alert('Failed to update user data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(`Updated ${name} to ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', userData);
    updateUserData(userData);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <h1>Welcome, {userData.name}</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="pI">
            Name: <input name="name" value={userData.name} onChange={handleChange} />
          </div>
          <div className="pI">
            Email: <input name="email" value={userData.email} onChange={handleChange} />
          </div>
          <div className="pI">
            Gender: <input name="gender" value={userData.gender} onChange={handleChange} />
          </div>
          <div className="pI">
            Role: <input name="role" value={userData.role} onChange={handleChange} />
          </div>
          <div className="pI">
            Institute: <input name="institute" value={userData.institute} onChange={handleChange} />
          </div>
          <div className="pI">
            Mobile: <input name="mobile" value={userData.mobile} onChange={handleChange} />
          </div>
          <div className="pI">
            Registration Number: <input name="registrationNumber" value={userData.registrationNumber} onChange={handleChange} />
          </div>
          <div className="pI">
            Course: <input name="course" value={userData.course} onChange={handleChange} />
          </div>
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <p>Email: {userData.email}</p>
          <p>Gender: {userData.gender}</p>
          <p>Role: {userData.role}</p>
          <p>Institute: {userData.institute}</p>
          <p>Mobile: {userData.mobile}</p>
          <p>Registration Number: {userData.registrationNumber}</p>
          <p>Course: {userData.course}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </>
  );
};

export default Profile;
