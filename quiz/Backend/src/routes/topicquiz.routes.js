import { Router } from 'express';
import { getQuizQuestions } from '../controllers/topicquiz.controllers.js';

const router = Router();

router.get('/questions', getQuizQuestions);


export default router;
