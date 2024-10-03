import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StartQuiz = () => {
  const location = useLocation();
  const { quizDetails } = location.state || { quizDetails: 'N/A' };
  
  const [questions, setQuestions] = useState([]); // Store questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [timer, setTimer] = useState(30); // 30-second timer
  const [userAnswers, setUserAnswers] = useState([]); // Track user's answers
  const [quizCompleted, setQuizCompleted] = useState(false); // Track if quiz is completed
  const [score, setScore] = useState(0); // Track the score

  // Fetch questions when component mounts
  useEffect(() => {
    if (quizDetails !== 'N/A') {
      const url = `http://localhost:8000/api/g1/users/questions?category=${quizDetails.electedQuizTopic}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setQuestions(data.questions);
        })
        .catch(error => {
          console.error('Error fetching quiz questions:', error);
        });
    }
  }, [quizDetails]);

  // Handle 30-second timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else {
      // Automatically move to the next question if time runs out
      handleNextQuestion();
    }
  }, [timer]);

  // Handle moving to the next question
  const handleNextQuestion = () => {
    // Save user's answer
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      setSelectedAnswer(null); // Reset selected answer
      setTimer(30); // Reset timer
    } else {
      // Quiz is complete, calculate the score
      calculateScore();
      setQuizCompleted(true); // Mark quiz as completed
    }
  };

  // Handle answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer); // Set selected answer
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      handleNextQuestion(); // Submit the selected answer and go to the next question
    } else {
      alert('Please select an answer before proceeding!');
    }
  };

  // Calculate the user's score
  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        newScore += 1; // Each correct answer is worth 1 point
      }
    });
    setScore(newScore);
  };

  if (quizCompleted) {
    return (
      <div style={{marginTop:"100px"}}>
        <h2>Quiz Completed! Your score is {score} out of {questions.length}</h2>
        <h3>Review of the Quiz:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <p><strong>{question.question_no}. {question.question}</strong></p>
              {question.code && <pre><code>{question.code}</code></pre>}
              <p><strong>Your answer:</strong> {userAnswers[index]}</p>
              <p><strong>Correct answer:</strong> {question.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div style={{marginTop:"100px"}}>
      <h1>Quiz</h1>
      {questions.length > 0 && (
        <div>
          <p><strong>Time remaining: {timer} seconds</strong></p>
          <p><strong>{questions[currentQuestionIndex].question_no}. {questions[currentQuestionIndex].question}</strong></p>
          {questions[currentQuestionIndex].code && (
            <pre><code>{questions[currentQuestionIndex].code}</code></pre>
          )}
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  id={`q-${currentQuestionIndex}-option-${index}`}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                <label htmlFor={`q-${currentQuestionIndex}-option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default StartQuiz;
