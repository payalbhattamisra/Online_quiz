import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_4ck68ze",
        "template_8y4n4bg",
        form.current,
        {
          publicKey: "Tcn_jcNNDTjZW8-zH",
        }
      );
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
      window.alert("Your message was sent successfully!");
      e.target.reset();
    } catch (error) {
      window.alert(`Failed to send message: ${error.message}`);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div className="contact">
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
        <div className="contactUs">
          <div className="contactInfo">
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <div className="cInfo">
              <i className="fa-solid fa-phone"></i>
              <p>+91 8895905526</p>
            </div>
            <div className="cInfo">
              <i className="fa-solid fa-envelope"></i>
              <p>payalbhattamisra@gmail.com</p>
            </div>
            <div className="cInfo">
              <i className="fa-solid fa-location-dot"></i>
              <p>NIST University, Berhampur</p>
            </div>
            <div className="socialConnectDiv">
              <div>
                <a className="socialConnect" href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div>
                <a className="socialConnect" href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div>
                <a className="socialConnect" href="/">
                  <i className="fa-brands fa-twitter "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contactMsg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contactInput">
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Write your Name.."
                />
              </div>
              <div className="contactInput">
                <label>Email</label>
                <input
                  type="text"
                  name="user_email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Write your Email.."
                />
              </div>
              <div className="contactInput">
                <label>Mobile Number</label>
                <input
                  type="text"
                  id="number"
                  name="user_no"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  placeholder="Write your Mobile Number"
                />
              </div>
              <div className="contactInput">
                <label>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Write your Subject"
                />
              </div>
              <div className="textA">
                <label>Message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message.."
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
