import React, { useState } from "react";
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [text, setText] = useState("Untitled Quiz");

  const toggleBold = () => {
    setBold(!bold);
  };

  const toggleItalic = () => {
    setItalic(!italic);
  };

  const inputStyle = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal"
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="form">
        <div className="icon">
          <div className="first">
            <i className="fa-solid fa-file-lines fa-2x" style={{ color: "#023E8A" }}></i>
            <div className="heading">{text}</div>
            <i className="fa-regular fa-star" style={{ color: "#222222" }}></i>
          </div>
          <div className="last">
            <i className="fa-solid fa-palette" style={{ color: "#222222 " }}></i>
            <i className="fa-regular fa-eye" style={{ color: "#222222" }}></i>
            <i className="fa-solid fa-arrow-left" style={{ color: " #222222" }}></i>
            <i className="fa-solid fa-arrow-right" style={{ color: " #222222" }}></i>
            <div className="btnswitch">
              <button className="btn3">send</button>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        <div className="que">
          <div className="box1">
            <div className="iner">
              <input
                type="text"
                id="quizTitle"
                value={text}
                style={inputStyle}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="toolbar">
                <button onClick={toggleBold}><b>B</b></button>
                <button onClick={toggleItalic}><i>I</i></button>
              </div>
            </div>
            <div className="in">
              <input type="text" placeholder="Form description" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
