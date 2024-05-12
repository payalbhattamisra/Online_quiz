import React from "react";
import './Description.css'

function Description() {
  return (
    <>
      <div className='desc'>
        <div className="headline">
          <h1>Make your own quiz with our online quiz maker</h1>
        </div>
        <div className="descPara1">
          <p>
            Quickly and easily create interactive online quizzes for free! With
            Quizizz, you can create a quiz that boosts engagement and
            participation with just a few clicks. Whether you’re looking to
            create a homework assignment for Math class, or an ice breaker to
            welcome new faces, there’s something here for everyone.
          </p>
        </div>
        <div className="descPara2">
          <div className="about1">
            <h3>Quizizz for College</h3>
            <p>
              Craft questions that enable students to identify multiple relevant
              areas, challenging them to think deeply about the image's elements
              and their relationships.
            </p>
          </div>
          <div className="aboutImage">
          <img src="./Images/quiz1.png" alt="" />
          </div>
        </div>
        <div className="descPara3">
          <div className="aboutImage">
          <img src="./Images/quiz1.png" alt="" />
          </div>
          <div className="about1">
            <h3>Quizizz for Work</h3>
            <p>
              Make employee training and education fun with Quizizz for Work.
              Our online quiz maker enables you to facilitate live engagement
              through presentations, quizzes, and polls. Use Quizizz at work for
              employee onboarding, e-learning, community engagement, and more!
            </p>
          </div>
        </div>
        <div className="descPara4">
          <p>
            Create immersive quizzes complete with images, gifs, audio clips,
            videos, graphs, illustrations, and so much more! Tap into 12+
            question types including Multiple Choice, Drag and Drop, Fill in the
            Blanks, and Hotspot. With Quizizz, you can also double the fun with
            power-ups, music, themes, and memes.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;
