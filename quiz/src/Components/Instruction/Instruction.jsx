import React from 'react'
import './Instruction.css'
function Instruction() {
  return (
    <>
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <div className="inst">
      <div className="instHeading">
        <h3>How to Make a Quiz</h3>
      </div>
      <div className="instPara">
        <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Launch: </span>Visit Quizizz, click on ‘Create’, and select the ‘Quiz’ option</div>
        </div>

      <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Create: </span>Mix and match 15 different question types including Multiple Choice, Reorder, Graphing, and Fill in the Blanks to make your own quiz, or</div>
      </div>

      <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Search: </span>Import existing questions from over 30M quizzes and lessons created by the Quizizz community, or</div>
      </div>


      <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Import: </span>Bring in quizzes from your spreadsheets or Google Forms, so you never have to start from scratch</div>
      </div>

      <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Customize: </span>Add images, videos, gifs, audio clips, equations, and more to your questions and answer options</div>
      </div>

      <div className="instLines">
          <div className="instLogo">
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="instLine">
            <span className='lineSubHeading'>Host: </span>Choose between multiple game modes including Live, Homework, Team, Test, and Paper Mode to host your quiz and get instant results</div>
      </div>



      </div>
    </div>
    </>
  )
}

export default Instruction