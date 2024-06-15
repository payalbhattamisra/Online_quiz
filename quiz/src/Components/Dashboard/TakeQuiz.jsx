import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./TakeQuiz.css";

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [responses, setResponses] = useState([]);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "Quizzes", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setQuiz(docSnap.data());
            setResponses(new Array(docSnap.data().questions.length).fill([]));
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching quiz: ", error);
        }
      }
    };
    fetchQuiz();
  }, []);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = [optionIndex];
    setResponses(newResponses);
  };

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    const newResponses = [...responses];
    if (newResponses[questionIndex].includes(optionIndex)) {
      newResponses[questionIndex] = newResponses[questionIndex].filter(
        (index) => index !== optionIndex
      );
    } else {
      newResponses[questionIndex].push(optionIndex);
    }
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    const newResults = quiz.questions.map((question, index) => {
      if (question.type === "shortans" || question.type === "para") {
        return responses[index] === question.answer;
      } else if (question.type === "multiple") {
        return question.options.some(
          (option, optionIndex) =>
            option.correct && responses[index][0] === optionIndex
        );
      } else if (question.type === "checkbox") {
        return question.options.every(
          (option, optionIndex) =>
            (option.correct && responses[index].includes(optionIndex)) ||
            (!option.correct && !responses[index].includes(optionIndex))
        );
      }
      return false;
    });
    setResults(newResults);
    setShowResults(true);

    // Calculate the score
    const newScore = newResults.filter((result) => result).length;
    setScore(newScore);
  };

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
                        onChange={() => handleOptionChange(index, optionIndex)}
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
                        onChange={() => handleCheckboxChange(index, optionIndex)}
                      />
                      <label>{option.text}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Quiz</button>
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
