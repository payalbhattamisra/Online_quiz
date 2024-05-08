import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
    <div className="logo"> 
      <h1 className='navbarName'>ज्ञानकोश</h1>
      </div>
      <div className="space">
       <a className='options' id="topic"href="/">Topicwise quiz</a>
       <a className='options'  id="rule"href="/">FAQs</a>
       <a className='options' id="question_pattern"href="/">Question pattern</a>
       <a className='options' id="faqs" href="/">Rule</a>
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