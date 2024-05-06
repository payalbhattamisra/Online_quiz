import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div>
            <h1>ज्ञानकोश</h1>
          </div>
          <div>
          <div className='footerDetails'>
            <div><Link to="/">REGISTER</Link></div>
            <div><Link to="/">CONTACT</Link></div>
            <div><Link to="/">OUR TEAM</Link></div>
          </div>
          </div>
          <div className='footerSocial'>
            <p>SOCIALIZE WITH US</p>
            <div className='sociaMedia'>
              <div><Link to="/"><i className="fa-brands fa-instagram"></i></Link></div>
              <div><Link to="/"><i className="fa-brands fa-twitter "></i></Link></div>
              <div><Link to="/"><i className="fa-brands fa-facebook-f"></i></Link></div>
              <div><Link to-="/"><i className="fa-brands fa-linkedin-in"></i></Link></div>
            </div>
          </div>
        </div>
        <div className="dev">
            <div><Link to="/"></Link></div>
            <div><Link to="/"><i className="fa-brands fa-twitter "></i></Link></div>

        </div>
        <div className="copyR">
          Copyright @2024 Gyankosh, All Rights Reserved 
        </div>
      </div>
    </>
  )
}

export default Footer