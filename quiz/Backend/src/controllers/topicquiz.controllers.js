import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getQuizQuestions = (req, res) => {
  try {
    const questionsFile = path.join(__dirname, '../public', 'quiz-questions.json');
    const questionsData = fs.readFileSync(questionsFile, 'utf-8');
    const allQuestions = JSON.parse(questionsData);

    const { category } = req.query;

    if (category && typeof category !== 'string') {
      throw new Error('Invalid category query parameter');
    }

    const filteredQuestions = category
  ? allQuestions.questions.filter(q => q.category.includes(category.toLowerCase()))
  : allQuestions.questions;

    res.status(200).json({ questions: filteredQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

export { getQuizQuestions };