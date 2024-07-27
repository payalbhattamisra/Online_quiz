import React, { useState, useEffect } from "react";
import "./TakeQuiz.css";

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [responses, setResponses] = useState([]);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  
  return (
    <div className="take-quiz">
      {quiz ? (
        <div>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
          {quiz.questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question.text}</p>
              {question.type === "shortans" && (
                <input
                  type="text"
                  value={responses[index]}
                  onChange={(e) =>
                    setResponses([
                      ...responses.slice(0, index),
                      e.target.value,
                      ...responses.slice(index + 1),
                    ])
                  }
                />
              )}
              {question.type === "para" && (
                <textarea
                  value={responses[index]}
                  onChange={(e) =>
                    setResponses([
                      ...responses.slice(0, index),
                      e.target.value,
                      ...responses.slice(index + 1),
                    ])
                  }
                />
              )}
              {question.type === "multiple" && (
                <div>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={responses[index][0] === optionIndex}
                        // onChange={() => handleOptionChange(index, optionIndex)}
                      />
                      <label>{option.text}</label>
                    </div>
                  ))}
                </div>
              )}
              {question.type === "checkbox" && (
                <div>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="checkbox"
                        name={`question-${index}`}
                        checked={responses[index].includes(optionIndex)}
                        // onChange={() => handleCheckboxChange(index, optionIndex)}
                      />
                      <label>{option.text}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* <button onClick={handleSubmit}>Submit Quiz</button> */}
        </div>
      ) : (
        <p>Loading quiz...</p>
      )}
      {showResults && (
        <div className="results">
          <h2>Results</h2>
          {results.map((result, index) => (
            <p key={index}>{`Question ${index + 1}: ${
              result ? "Correct" : "Incorrect"
            }`}</p>
          ))}
          <h3>
            Your Score: {score} / {results.length}
          </h3>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;
