import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "Users", user.email));
          if (userDoc.exists()) {
            setUser(userDoc.data());
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

  const getInitial = (name) => {
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    return "";
  };
  return (
    <>
      <div className="dashboard">
        {user ? (
          <>
            {user.role === "Admin" ? (
              <>
                {/* admin */}
                <div className="dash">
                  <div className="dashL">
                    <h3>Welcome {user.name}</h3>
                    <button>Create Quiz</button>
                    <NavLink>Profile</NavLink>
                    <NavLink>Dashboard</NavLink>
                    <NavLink>Manage Exam</NavLink>
                    <NavLink>Registered Students</NavLink>
                    <NavLink>Setting</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                  <div className="dashR">
                    ilopiokpkokolkoiokoploloiioplikpoloiopl
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* learner */}
                <div className="dash">
                  <div className="dashL">
                    <h1>Welcome {user.name}</h1>
                    <div>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="profile-pic"
                        />
                      ) : (
                        <div className="profile-initial">
                          {getInitial(user.name)}
                        </div>
                      )}
                    </div>
                    <h3>Learner</h3>
                    <button>Create Quiz</button>
                    <NavLink></NavLink>
                    <NavLink>Manage Exam</NavLink>
                    <NavLink>Students</NavLink>
                    <NavLink>Registered Students</NavLink>

                    <button onClick={handleLogout}>Logout</button>
                  </div>
                  <div className="DashR"></div>
                </div>
              </>
            )}
          </>
        ) : (
          <div>No user data found.</div>
        )}
      </div>
    </>
  );
}

export default Dashboard;

/* <>
<h1>Welcome, {userData.name}</h1>
<p>Email: {userData.email}</p>
<p>Gender: {userData.gender}</p>
<p>Role: {userData.role}</p>
<p>Institute: {userData.institute}</p>
<p>Mobile: {userData.mobile}</p>
<p>Registration Number: {userData.registrationNumber}</p>
<p>Course: {userData.course}</p>
<button onClick={handleLogout}>Logout</button>
</> */

// {userData ? (
//   <>
//     { userData.role ==="Admin" ?(
//       <>
//       <h1>Welcome Admin, {userData.name}</h1>

//       </>
//     ):(
//       <>
//       <h1>Welcome Learner, {userData.name}</h1>

//     </>
//     )}
//   </>
// ) : (
//   <div>No user data found.</div>
// )}
