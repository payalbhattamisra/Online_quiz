import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
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
  const [currentSection, setCurrentSection] = useState("profile");
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

  const renderSection = () => {
    switch (currentSection) {
      case "profile":
        return <Profile user={user} handleLogout={handleLogout} />;
      case "createQuiz":
        return <CreateQuiz />;
        case "dashboard":
          return <DeshBoard />;
          case "manageExam":
            return <ManageExam />;
            case "registeredStudents":
              return <RegStudent />;  
              case "setting":
                return <Setting />;
      default:
        return <DeshBoard/>;
    }
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
    <>
      <div className="dashboard">
        {user ? (
          <>
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
                <button onClick={handleLogout}>Logout</button>
              </div>
              <div className="dashR">
                {renderSection()}
              </div>
            </div>
          </>
        ) : (
          <div>No user data found.</div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
