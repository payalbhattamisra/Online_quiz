import React from 'react'
import "./Banner.css";
function Banner() {
   const navigateToQuiz=()=>{
    window.location.href='./quiz';
   }
   const Topicquiz=()=>{
    window.location.href='./Topicwise_quiz'
   }
  return (
    <>
      <div className='page1' id='home'>
        <div className="part1"> 
        <h1>Free Online  quiz maker</h1>
        </div>
        <div className='page2'>
          <p>Make a quiz with different question types to engage students in a classroom,
          <br/><p>  train employees at work, or play trivia with friends.</p></p>  
          </div>
          
         
        <div className='createquiz'>
        <button onClick={navigateToQuiz}>
          
        
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
       
    
      <span>Create a quiz</span>
     </button >
     <button onClick={Topicquiz}>
          
        
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
         
      
        <span>Topicwise quiz</span>
       </button >
        </div>
        <div className='para'> 
        <p>Make interactive quiz in minutes.</p>
        </div>
      </div>
    </>
  )
}

export default Banner
