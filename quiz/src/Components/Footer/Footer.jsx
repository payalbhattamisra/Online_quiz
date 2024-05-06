import React from 'react'
import './Footer.css'; 
function Footer() {
  return (
    <>
     <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="footer">

        <div className='info'>


          <div>
            <h1>ज्ञानकोश</h1>
          </div>
          <div className='vertical'></div>


          <div>
          <div className='footerDetails'>
            <div><a href="/">CONTACT US</a></div>
            <div><a href="/">ABOUT US</a></div>
            <div><a href="/">HELP CENTER</a></div>
          </div>
          </div>
          <div className='vertical'></div>


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

        <div className="horizontal"></div>

      
        <div className="dev">
          <div>Devloper:</div>
        <div><a href="/"><p>Govinda Mahanti</p></a></div>
        <div>, </div>
        <div><a href="/"><p>Payal Bhattamisra</p></a></div>
        </div>



        <div className="copyR">
          Copyright @2024 Gyankosh, All Rights Reserved 
        </div>
      </div>
    </>
  )
}


export default Footer