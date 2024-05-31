import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <link
        rel="stylesheet"
        href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div className="contact">
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
        <div className="contactUs">
          <div className="contactInfo">
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
            <div>
              <i class="fa-solid fa-phone"></i>
              <p>9755390579</p>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <p>gmahanti955@gmail.com</p>
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <p>NIST University, Berhampur</p>
            </div>
            <div>
              <div>
                <a className="socialMediaSite" href="/">
                  <i className="fa-brands fa-twitter "></i>
                </a>
              </div>
              <div>
                <a className="socialMediaSite" href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div>
                <a className="socialMediaSite" href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contacyMsg">
            <form action="">
              <div className="signInput">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Name"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  placeholder="Mobile Number"
                />
              </div>
              <div className="signInput">
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message.."
                />
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
