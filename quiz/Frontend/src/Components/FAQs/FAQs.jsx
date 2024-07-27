import React, { useState } from "react";
import "./FAQs.css";

function FAQs() {
  // Define state to track active accordion items
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs" id="hero">
      <div className="headings">
        <h1>FAQs</h1>
      </div>

      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <button
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className={`panel ${activeIndex === index ? "active" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Array of FAQ items
const faqs = [
  {
    question: "Is gyankosh free to use?",
    answer:
      "Yes! gyankosh offers a free online quiz maker that you can use to create interactive and engaging quizzes in just minutes. To access the full range of question types along with additional features, explore our paid plans here.",
  },
  {
    question: "What kind of questions can I add to my quiz?",
    answer:
      "Choose between 5 different question types including Match the Following, Multiple Choice, Fill in the Blanks. You can also add images, videos and equations to your questions.",
  },
  {
    question: "How can participants join my quiz?",
    answer:
      "Share your quiz link directly with your students or assign the quiz to your classes with a single click. Participants can also visit https://gyankosh.com/join and enter the unique join code assigned to your quiz to begin the activity.",
  },
  {
    question: "How can I grade an Online quiz on gyankosh?",
    answer:
      "Once you create and host your online quiz, feel free to leave the rest to gyankosh. Responses to your quiz questions will be automatically graded and synced with your reports. You can also choose to manually grade responses that call for higher-order thinking.",
  },
  {
    question: "Where can i find the results of my quiz?",
    answer:
      "Our online quiz maker provides lightning-quick and detailed reports on your quizzes under the ‘Reports’ section. Get the best insights on individual student performance as well as class performance and track progress across multiple attempts.",
  },
];

export default FAQs;
