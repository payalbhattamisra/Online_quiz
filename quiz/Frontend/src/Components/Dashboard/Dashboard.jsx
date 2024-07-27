import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Profile from "./Profile";
import CreateQuiz from "./CreateQuiz";
import Setting from "./Setting";
import RegStudent from "./RegStudent";
import ManageExam from "./ManageExam";
import DeshBoard from "./DeshBoard";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("DeshBoard");
  const navigate = useNavigate();

  

  const renderSection = () => {
    switch (currentSection) {
      case "dashboard":
        return <DeshBoard />;
      case "profile":
        return <Profile user={user} />;
      case "createQuiz":
        return <CreateQuiz />;
      case "manageExam":
        return <ManageExam />;
      case "registeredStudents":
        return <RegStudent />;
      case "setting":
        return <Setting />;
      default:
        return <DeshBoard />;
    }
  };

  if (loading) {
    return (
      <div className="d">
        <p>Loading...</p>
        {/* .................. */}
        <button onClick="/">Logout</button>
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
                <h3>Welcome, {user.name}</h3>
                <button onClick={() => setCurrentSection("createQuiz")}>
                  Create Quiz
                </button>
                <NavLink onClick={() => setCurrentSection("profile")}>Profile</NavLink>
                <NavLink onClick={() => setCurrentSection("dashboard")}>Dashboard</NavLink>
                <NavLink onClick={() => setCurrentSection("manageExam")}>Manage Exam</NavLink>
                <NavLink onClick={() => setCurrentSection("registeredStudents")}>Registered Students</NavLink>
                <NavLink onClick={() => setCurrentSection("setting")}>Setting</NavLink>
                {/* .................... */}
                <button onClick="/">Logout</button>
              </div>
              <div className="dashR">
                {renderSection()}
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
                      {/* ..................... */}
                    <button onClick="/">Logout</button>
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