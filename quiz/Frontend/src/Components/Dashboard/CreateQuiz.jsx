import React, { useState } from "react";
import './CreateQuiz.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare quiz data
    const quizData = {
      title: titleText,
      category: "default",  
      description: descText,
      questions: questions.map((question) => ({
        text: question.text,
        type: question.type,
        options: question.options,
        answer: question.answer,
      })),
      examDate: examDate,
      teacherInfo: teacherInfo,
    };
    try {
      const response = await axios.post('http://localhost:8000/api/quiz/create', quizData, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_SECRET}`,
        },
      });
      console.log('Quiz created successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating quiz:', error.response?.data || error.message);
    }
  };

  const [questions, setQuestions] = useState([
    {
      bold: false,
      italic: false,
      text: "Enter a question",
      focused: false,
      upperCase: false,
      type: "shortans",
      options: [{ text: "", correct: false }],
      answer: "",
    },
  ]);

  const [examDate, setExamDate] = useState("");
  const [teacherInfo, setTeacherInfo] = useState("");

  const toggleTitleBold = () => {
    setTitleBold(!titleBold);
  };
  const navigate = useNavigate();
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

  const toggleQuestionBold = (index) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, bold: !q.bold } : q
    ));
    setQuestions(updatedQuestions);
  };

  const toggleQuestionItalic = (index) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, italic: !q.italic } : q
    ));
    setQuestions(updatedQuestions);
  };

  const toggleQuestionUpperCase = (index) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        const newText = q.upperCase ? q.text.toLowerCase() : q.text.toUpperCase();
        return { ...q, upperCase: !q.upperCase, text: newText };
      }
      return q;
    });
    setQuestions(updatedQuestions);
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

  const handleQuestionFocus = (index) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, focused: true } : q
    ));
    setQuestions(updatedQuestions);
  };

  const handleQuestionBlur = (index) => {
    setTimeout(() => {
      const updatedQuestions = questions.map((q, i) => (
        i === index ? { ...q, focused: false } : q
      ));
      setQuestions(updatedQuestions);
    }, 200);
  };

  const handleQuestionTypeChange = (index, event) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, type: event.target.value, options: [""] } : q
    ));
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === questionIndex) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = { ...newOptions[optionIndex], text: value };
        return { ...q, options: newOptions };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  
  const toggleCorrectAnswer = (questionIndex, optionIndex) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === questionIndex) {
        const newOptions = q.options.map((option, oi) => {
          if (oi === optionIndex) {
            return { ...option, correct: !option.correct };
          }
          return option;
        });
        return { ...q, options: newOptions };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const addOption = (index) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, options: [...q.options, { text: "", correct: false }] } : q
    ));
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, {
      bold: false,
      italic: false,
      text: "Enter a question",
      focused: false,
      upperCase: false,
      type: "shortans",
      options: [{ text: "", correct: false }],
      answer: "",
    }]);
  };

  const renderQuestionInput = (question, index) => {
    switch (question.type) {
      case "shortans":
        return (
          <div className="answer-input">
            <input
              type="text"
              value={question.answer}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].answer = e.target.value;
                setQuestions(newQuestions);
              }}
              placeholder="Correct answer"
            />
          </div>
        );
      case "para":
        return (
          <div className="answer-input">
            <textarea
              value={question.answer}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].answer = e.target.value;
                setQuestions(newQuestions);
              }}
              placeholder="Correct answer"
            />
          </div>
        );
      case "multiple":
        return (
          <div className="multiple-choice">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <input
                  type="radio"
                  name={`multiple-choice-${index}`}
                  checked={option.correct}
                  onChange={() => toggleCorrectAnswer(index, optionIndex)}
                />
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                  placeholder="Option"
                />
              </div>
            ))}
            <button onClick={() => addOption(index)}>Add option</button>
          </div>
        );
      case "checkbox":
        return (
          <div className="multiple-choice">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <input
                  type="checkbox"
                  name={`checkbox-choice-${index}`}
                  checked={option.correct}
                  onChange={() => toggleCorrectAnswer(index, optionIndex)}
                />
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                  placeholder="Option"
                />
              </div>
            ))}
            <button onClick={() => addOption(index)}>Add option</button>
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
            <div className="heading" style={{
              fontWeight: titleBold ? "bold" : "normal",
              fontStyle: titleItalic ? "italic" : "normal",
              textTransform: titleUpperCase ? "uppercase" : "none"
            }}>{titleText}</div>
            <i className="fa-regular fa-star" style={{ color: "#222222" }}></i>
          </div>
          <div className="last">
            <i className="fa-solid fa-palette" style={{ color: "#222222 " }}></i>
            <i className="fa-regular fa-eye" style={{ color: "#222222" }}></i>
            <i className="fa-solid fa-arrow-left" style={{ color: " #222222" }}></i>
            <i className="fa-solid fa-arrow-right" style={{ color: " #222222" }}></i>
            <div className="btnswitch">
              {/* ........................ */}
              <button className="btn3" onClick="/">send</button>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        <div className="que">
          <div className="left">
            <div className="box1">
              <div className="iner">
                <input
                  type="text"
                  id="quizTitle"
                  value={titleText}
                  style={{
                    fontWeight: titleBold ? "bold" : "normal",
                    fontStyle: titleItalic ? "italic" : "normal",
                    textTransform: titleUpperCase ? "uppercase" : "none"
                  }}
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
                  style={{
                    fontWeight: descBold ? "bold" : "normal",
                    fontStyle: descItalic ? "italic" : "normal",
                    textTransform: descUpperCase ? "uppercase" : "none"
                  }}
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
              <div className="in">
                <input
                  type="date"
                  placeholder="Exam Date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                />
              </div>
              <div className="in">
                <textarea
                  placeholder="Additional information from the teacher"
                  value={teacherInfo}
                  onChange={(e) => setTeacherInfo(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="vl" onClick={addQuestion}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </div>

        {questions.map((question, index) => (
          <div className="box2" key={index}>
            <div className="que">
              <input
                type="text"
                value={question.text}
                style={{
                  fontWeight: question.bold ? "bold" : "normal",
                  fontStyle: question.italic ? "italic" : "normal",
                  textTransform: question.upperCase ? "uppercase" : "none"
                }}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].text = e.target.value;
                  setQuestions(newQuestions);
                }}
                onFocus={() => handleQuestionFocus(index)}
                onBlur={() => handleQuestionBlur(index)}
              />
              {question.focused && (
                <div className="toolbar">
                  <button onClick={() => toggleQuestionBold(index)}><b>B</b></button>
                  <button onClick={() => toggleQuestionItalic(index)}><i>I</i></button>
                  <button onClick={() => toggleQuestionUpperCase(index)}>Upper/Lower</button>
                </div>
              )}
            </div>
            <div className="optionss">
              <select
                name="quiztype"
                id="quiztypes"
                value={question.type}
                onChange={(e) => handleQuestionTypeChange(index, e)}
              >
                <option value="shortans">➖ Short answer</option>
                <option value="para">✍️ Paragraph</option>
                <option value="multiple">🔘 Multiple choice</option>
                <option value="checkbox">☑️ Checkboxes</option>
                <option value="dropdown">🔽 Dropdown</option>
              </select>
              {renderQuestionInput(question, index)}
            </div>
          </div>
        ))}
        {/* ............................ */}
        <button onClick ={handleSubmit}>Submit Quiz</button>
      </div>
    </>
  );
};

export default CreateQuiz;
