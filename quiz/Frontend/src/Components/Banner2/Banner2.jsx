import React from "react";
import "./Banner2.css";

function Banner2() {
  return (
    <>
      <div className="bann">
        <div className="bannL">
          <p>
            The best way to ask questions, explore ideas, and let participants
            show what they know.
          </p>
          <h2>Make an online quiz for free in minutes.</h2>
          <button>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>

            <span>Create a quiz</span>
          </button>
        </div>
        <div className="bannR">
          <img src="./Images/bann.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner2;
