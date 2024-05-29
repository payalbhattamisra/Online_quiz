import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import './Deshbord.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "Users", user.email));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No such user document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("No user is currently signed in.");
        navigate("/Loginp");
      }
    };

    fetchUserData();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/Loginp");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/Loginp");
  };

  if (loading) {
    return (
      <div className="d">
        <p>Loading...</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="d">
      {userData ? (
        <>
          <h1>Welcome, {userData.name}</h1>
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
        <div>No user data found.</div>
      )}
    </div>
  );
}

export default Dashboard;
