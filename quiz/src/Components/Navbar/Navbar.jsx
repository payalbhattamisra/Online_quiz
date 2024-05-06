import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
    <div className="logo"> 
      <h1>Gyankosh</h1>
      </div>
      <div className="space">

      </div>
      <div className="btn">
        <button>Contact us</button>
        <button>Enter Code</button>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
