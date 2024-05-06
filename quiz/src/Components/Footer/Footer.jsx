import React from 'react'
import './Footer.css'; 
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
            <div><a href="/">REGISTER</a></div>
            <div><a href="/">CONTACT</a></div>
            <div><a href="/">OUR TEAM</a></div>
          </div>
          </div>
          <div className='footerSocial'>
            <p>SOCIALIZE WITH US</p>
            <div className='sociaMedia'>
              <div><a href="/"><i className="fa-brands fa-instagram"></i></a></div>
              <div><a href="/"><i className="fa-brands fa-twitter "></i></a></div>
              <div><a href="/"><i className="fa-brands fa-facebook-f"></i></a></div>
              <div><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>
          </div>
        </div>
        <div className="dev">
            <div><a href="/"></a></div>
            <div><a href="/"><i className="fa-brands fa-twitter "></i></a></div>

        </div>
        <div className="copyR">
          Copyright @2024 Gyankosh, All Rights Reserved 
        </div>
      </div>
    </>
  )
}

export default Footer