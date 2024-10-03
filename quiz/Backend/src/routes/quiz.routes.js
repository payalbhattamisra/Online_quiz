import { Router } from "express";
import {  createQuiz  } from "../controllers/quiz.controllers.js";
const quizRouter = Router();

quizRouter.route("/create").post(createQuiz);

export default quizRouter;