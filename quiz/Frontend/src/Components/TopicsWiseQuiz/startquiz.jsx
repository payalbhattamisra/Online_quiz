
import React, { useEffect } from 'react';

const StartQuiz = () => {

  useEffect(() => {
    //  http://localhost:8000/api/g1/users/questions
fetch('http://localhost:8000/api/g1/users/questions')
.then(response => response.json())
.then(questions => {
  console.log(questions);
})
.catch(error => {
  console.error('Error fetching quiz questions:', error);
});
  }, []);

  return (
    <>
    
    </>
  );
};

export default StartQuiz;
