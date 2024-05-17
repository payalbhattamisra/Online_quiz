import React, {useState} from 'react';
import {Link} from 'react-scroll';
import "./Navbar.css"
function Navbar() {
  const [click, setClick] = useState(false)
  const closeMenu =() => setClick(false);

  const Signup=()=>{
    window.location.href='./Signup'
   }
   const Login=()=>{
    window.location.href='./Login'
   }
  return (
    <div className='nav'>
    <div className="logo"> 
      <h1 className='navbarName'>ज्ञानकोश</h1>
      </div>
      <div className="space">
       <Link className='options' to="home" smooth={true} offset={-70} duration={50} onClick={closeMenu}>Home</Link>
       <Link className='options' to="type" smooth={true} offset={-70} duration={50} onClick={closeMenu}>Question pattern</Link>
       <Link className='options' to="rule" smooth={true} offset={-70} duration={50} onClick={closeMenu}>Rule</Link>
       <Link className='options' to="hero" smooth={true} offset={-70} duration={50} onClick={closeMenu}>FAQs</Link>
      </div>
      <div className="btn">
        <button className='btn1' >Contact us</button>
        <button className='btn1'>Enter Code</button>
        <button className='btn1'onClick={Login}>Login</button>
        <button className='btn1'onClick={Signup}>Sign up</button>
      </div>
    </div>
    
  )
}


export default Navbar