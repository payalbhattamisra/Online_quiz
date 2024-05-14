import React from 'react'
import './FAQs.css'
function FAQs() {
  var acc=document.getElementsByClassName("accordion");
  var i;
  for(i=0;i<acc.length;i++){
  acc[i].addEventListener("click",function(){
  this.classList.toggle("active");
  this.parentElement.classList.toggle("active");

  var pannel=this.nextElementSibling;
  if(pannel.style.display==="block"){
    pannel.style.display="none";
  }else{
    pannel.style.display="block";
  }
  });
  }
  return (
    <>
     <div className="faqs">
        <div className="headings"> 
        <h1>FAQs</h1>
        </div>
        <div className="faq">
          <button className='accordion'>
           Is gyankosh free to use?
           <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Yes! gyankosh offers a free online quiz maker that you can use to create interactive and engaging quizzes in just minutes. To access the full range of question types along with additional features, explore our paid plans here.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className='accordion'>
           What kind of questions can I add to my quiz?
           <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Choose between 5 different question types including Match the Following, Multiple Choice, Fill in the Blanks. You can also add images, videos and equations to your questions.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className='accordion'>
           How can participants join my quiz?
           <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Share your quiz link directly with your students or assign the quiz to your classes with a single click. Participants can also visit https://gyankosh.com/join and enter the unique join code assigned to your quiz to begin the activity.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className='accordion'>
           How can I grade an Online quiz on gyankosh?
           <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Once you create and host your online quiz, feel free to leave the rest to gyankosh. Responses to your quiz questions will be automatically graded and synced with your reports. You can also choose to manually grade responses that call for higher-order thinking.
            </p>
          </div>
        </div>
        <div className="faq">
          <button className='accordion'>
           Where can i find the results of my quiz?
           <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
            Our online quiz maker provides lightning-quick and detailed reports on your quizzes under the ‘Reports’ section. Get the best insights on individual student performance as well as class performance and track progress across multiple attempts.
            </p>
          </div>
        </div>
        </div> 
    </>
  )
}

export default FAQs
