import React, { useState } from "react";
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [titleBold, setTitleBold] = useState(false);
  const [titleItalic, setTitleItalic] = useState(false);
  const [titleText, setTitleText] = useState("Untitled Quiz");
  const [titleFocused, setTitleFocused] = useState(false);
  const [titleUpperCase, setTitleUpperCase] = useState(false);

  const [descBold, setDescBold] = useState(false);
  const [descItalic, setDescItalic] = useState(false);
  const [descText, setDescText] = useState("");
  const [descFocused, setDescFocused] = useState(false);
  const [descUpperCase, setDescUpperCase] = useState(false);

  const toggleTitleBold = () => {
    setTitleBold(!titleBold);
  };

  const toggleTitleItalic = () => {
    setTitleItalic(!titleItalic);
  };

  const toggleTitleUpperCase = () => {
    const newText = titleUpperCase ? titleText.toLowerCase() : titleText.toUpperCase();
    setTitleUpperCase(!titleUpperCase);
    setTitleText(newText);
  };

  const toggleDescBold = () => {
    setDescBold(!descBold);
  };

  const toggleDescItalic = () => {
    setDescItalic(!descItalic);
  };

  const toggleDescUpperCase = () => {
    const newText = descUpperCase ? descText.toLowerCase() : descText.toUpperCase();
    setDescUpperCase(!descUpperCase);
    setDescText(newText);
  };

  const titleInputStyle = {
    fontWeight: titleBold ? "bold" : "normal",
    fontStyle: titleItalic ? "italic" : "normal",
    textTransform: titleUpperCase ? "uppercase" : "none"
  };

  const descInputStyle = {
    fontWeight: descBold ? "bold" : "normal",
    fontStyle: descItalic ? "italic" : "normal",
    textTransform: descUpperCase ? "uppercase" : "none"
  };

  const handleTitleFocus = () => {
    setTitleFocused(true);
  };

  const handleTitleBlur = () => {
    setTimeout(() => {
      setTitleFocused(false);
    }, 200);
  };

  const handleDescFocus = () => {
    setDescFocused(true);
  };

  const handleDescBlur = () => {
    setTimeout(() => {
      setDescFocused(false);
    }, 200);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="form">
        <div className="icon">
          <div className="first">
            <i className="fa-solid fa-file-lines fa-2x" style={{ color: "#023E8A" }}></i>
            <div className="heading" style={titleInputStyle}>{titleText}</div>
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
                value={titleText}
                style={titleInputStyle}
                onChange={(e) => setTitleText(e.target.value)}
                onFocus={handleTitleFocus}
                onBlur={handleTitleBlur}
              />
              {titleFocused && (
                <div className="toolbar">
                  <button onClick={toggleTitleBold}><b>B</b></button>
                  <button onClick={toggleTitleItalic}><i>I</i></button>
                  <button onClick={toggleTitleUpperCase}>Upper/Lower</button>
                </div>
              )}
            </div>
            <div className="in">
              <input
                type="text"
                placeholder="Form description"
                value={descText}
                style={descInputStyle}
                onChange={(e) => setDescText(e.target.value)}
                onFocus={handleDescFocus}
                onBlur={handleDescBlur}
              />
              {descFocused && (
                <div className="toolbar">
                  <button onClick={toggleDescBold}><b>B</b></button>
                  <button onClick={toggleDescItalic}><i>I</i></button>
                  <button onClick={toggleDescUpperCase}>Upper/Lower</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
