import React  from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import './QuizQuestionDetails.css'
function QuizQuestionDetails() {
    const location=useLocation();
    const navigate=useNavigate();
    const {selectedQuizTopic}=location.state || { selectedQuizTopic: 'N/A' };
    const quizDetails= {
        selectedQuizTopic,
        totalQuestions:10,
        totalScore:100,
        totalTime:600,
    };
    const convertSeconds=(seconds)=>{
        const minutes=Math.floor(seconds/60);
        const remainingSeconds=seconds%60;
        return `${minutes}m ${remainingSeconds}s`;
    }
    const startQuiz =()=>{
        //console.log("Quiz started!");
        navigate('/Start_Quiz',{state:{quizDetails}});
    }
  return (
    <>
    <div className="quiz_question"> 
    <div className="headi"> 
    <h1>GYANKOSH QUIZ</h1>
    </div>
    <div className="box">
     <ul className='pattern'>
        <li>Selected Quiz Topic: <span>{quizDetails.selectedQuizTopic}</span></li>
        <li>Total questions to attempt: <span>{quizDetails.totalQuestions}</span></li>
        <li>Score in total: <span>{quizDetails.totalScore}</span></li>
        <li>Total time: <span>{convertSeconds(quizDetails.totalTime)}</span></li>
        <li>To save time, you can skip questions. Skipped questions</li>
        <li>will show up at the end of the quiz.</li>
     </ul>
     
    <div className="btnstart">
        <button className='btn2' onClick={startQuiz}>Start</button>
     </div>
    </div>
      </div>
    </>
  )
}

export default QuizQuestionDetails
