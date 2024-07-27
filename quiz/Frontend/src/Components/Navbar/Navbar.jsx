// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();



  const closeMenu = () => setClick(false);

  const Signup = () => navigate('/Signup');
  const Loginp = () => navigate('/Loginp');
  const Contact = () => navigate('/Contact');

  const getInitial = (name) => {
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    return '';
  };

  return (
    <div className="nav">
      <div className="logo">
        <h1 className="navbarName">ज्ञानकोश</h1>
      </div>
      <div className="space">
        <NavLink className="options" to="/">
          Home
        </NavLink>
        <Link
          className="options"
          to="type"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          Question pattern
        </Link>
        <Link
          className="options"
          to="rule"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          Rule
        </Link>
        <Link
          className="options"
          to="hero"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          FAQs
        </Link>
      </div>
      <div className="btn">
        {!user ? (
          <>
            <button className="btn1" onClick={Loginp}>
              Login
            </button>
            <button className="btn1" onClick={Signup}>
              Signup
            </button>
            <button className="btn1" onClick={Contact}>
              Contact us
            </button>
            <button className="btn1">
              Enter Code
            </button>
          </>
        ) : (
          <>
            <button className="btn1" onClick={Contact}>
              Contact us
            </button>
            <button className="btn1">
              Enter Code
            </button>
            <div className="profilePic">
              <NavLink to="/Dashboard" className="profileLink">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="profile-pic"
                  />
                ) : (
                  <div className="profile-initial">{getInitial(user.name)}</div>
                )}
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
