import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getQuizQuestions = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public', 'quiz-questions.json'));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "questions are no found");
  }
};



export {
    submitQuiz, getQuizQuestions
}