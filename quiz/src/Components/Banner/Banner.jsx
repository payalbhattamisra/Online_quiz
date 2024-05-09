import React from 'react'
import "./Banner.css";
function Banner() {
  return (
    <>
      <div className='page1'>
        <div className="part1"> 
        <h1>Free Online  quiz maker</h1>
        </div>
        <div className='page2'>
          <p>Make a quiz with different question types to engage students in a classroom,
          <br/><p>  train employees at work, or play trivia with friends.</p></p>  
          </div>
          <div> 
         
        <div className='createquiz'>
        <button>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Create a quiz</span>
</button>

        </div>
        </div>
      </div>
    </>
  )
}

export default Banner
