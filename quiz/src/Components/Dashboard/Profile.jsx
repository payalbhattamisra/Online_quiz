import React, { useState } from "react";
import { db } from '../../firebase'; // Ensure this path is correct
import { doc, updateDoc } from "firebase/firestore";


  const updateUserData = async (updatedData) => {
    console.log('Attempting to update user data:', updatedData);
    try {
      const userDoc = doc(db, 'users', user.id); // Ensure user.id is correct
      await updateDoc(userDoc, updatedData);
      setUserData({ ...userData, ...updatedData });
      alert('User data updated successfully');
    } catch (error) {
      console.error("Error updating user data: ", error);
      alert('Failed to update user data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <p>
            Name: <input name="name" value={userData.name} onChange={handleChange} />
          </p>
          <p>
            Email: <input name="email" value={userData.email} onChange={handleChange} />
          </p>
          <p>
            Gender: <input name="gender" value={userData.gender} onChange={handleChange} />
          </p>
          <p>
            Role: <input name="role" value={userData.role} onChange={handleChange} />
          </p>
          <p>
            Institute: <input name="institute" value={userData.institute} onChange={handleChange} />
          </p>
          <p>
            Mobile: <input name="mobile" value={userData.mobile} onChange={handleChange} />
          </p>
          <p>
            Registration Number: <input name="registrationNumber" value={userData.registrationNumber} onChange={handleChange} />
          </p>
          <p>
            Course: <input name="course" value={userData.course} onChange={handleChange} />
          </p>
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
