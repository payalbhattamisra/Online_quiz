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

  const [questionBold, setQuestionBold] = useState(false);
  const [questionItalic, setQuestionItalic] = useState(false);
  const [questionText, setQuestionText] = useState("Untitled question");
  const [questionFocused, setQuestionFocused] = useState(false);
  const [questionUpperCase, setQuestionUpperCase] = useState(false);

  const [questionType, setQuestionType] = useState("shortans");
  const [options, setOptions] = useState([""]);

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

  const toggleQuestionBold = () => {
    setQuestionBold(!questionBold);
  };

  const toggleQuestionItalic = () => {
    setQuestionItalic(!questionItalic);
  };

  const toggleQuestionUpperCase = () => {
    const newText = questionUpperCase ? questionText.toLowerCase() : questionText.toUpperCase();
    setQuestionUpperCase(!questionUpperCase);
    setQuestionText(newText);
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

  const questionInputStyle = {
    fontWeight: questionBold ? "bold" : "normal",
    fontStyle: questionItalic ? "italic" : "normal",
    textTransform: questionUpperCase ? "uppercase" : "none"
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

  const handleQuestionFocus = () => {
    setQuestionFocused(true);
  };

  const handleQuestionBlur = () => {
    setTimeout(() => {
      setQuestionFocused(false);
    }, 200);
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
    setOptions([""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const renderQuestionInput = () => {
    switch (questionType) {
      case "shortans":
        return <div className="answer-input">Short answer text</div>;
      case "para":
        return <div className="answer-input">Long answer text</div>;
      case "multiple":
        return (
          <div className="multiple-choice">
            {options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  name="multiple-choice"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder="Option"
                />
              </div>
            ))}
            <button onClick={addOption}>Add option</button>
          </div>
        );
      case "checkbox":
        return (
          <div className="checkbox-choice">
            {options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  name="checkbox-choice"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder="Option"
                />
              </div>
            ))}
            <button onClick={addOption}>Add option</button>
          </div>
        );
      default:
        return null;
    }
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
          <div className="box2">
            <div className="que"> 
              <input
                type="text"
                value={questionText}
                style={questionInputStyle}
                onChange={(e) => setQuestionText(e.target.value)}
                onFocus={handleQuestionFocus}
                onBlur={handleQuestionBlur}
              />
              {questionFocused && (
                <div className="toolbar">
                  <button onClick={toggleQuestionBold}><b>B</b></button>
                  <button onClick={toggleQuestionItalic}><i>I</i></button>
                  <button onClick={toggleQuestionUpperCase}>Upper/Lower</button>
                </div>
              )}
              <select name="quiztype" id="quiztypes" onChange={handleQuestionTypeChange}>
                <option value="shortans">➖ Short answer</option>
                <option value="para">✍️ Paragraph</option>
                <option value="multiple">🔘 Multiple choice</option>
                <option value="checkbox">☑️ Checkboxes</option>
                <option value="dropdown">🔽 Dropdown</option>
              </select>
              {renderQuestionInput()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
