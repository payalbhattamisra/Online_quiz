import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import './Deshbord.css';

function Deshbord() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/Loginp");
  };

  return (
    <div className="d">
      {user ? (
        userData ? (
          <>
            <h1>Hello, {userData.name}</h1>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
            <p>Role: {userData.role}</p>
            <p>Institute: {userData.institute}</p>
            <p>Mobile: {userData.mobile}</p>
            <p>Registration Number: {userData.registrationNumber}</p>
            <p>Course: {userData.course}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div>
            <p>Loading user data...</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )
      ) : (
        <div>
          <p>Loading...</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Deshbord;