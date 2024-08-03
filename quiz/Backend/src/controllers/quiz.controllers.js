import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { Quiz } from "../models/quiz.model.js";
import { quizquestion } from "../models/quizquestions.model.js";
export const createQuiz = asyncHandler(async (req, res) => {
    try {
        const {
          titleText,
          titleBold,
          titleItalic,
          titleUpperCase,
          descText,
          descBold,
          descItalic,
          descUpperCase,
          examDate,
          teacherInfo,
          questions
        } = req.body;

        const quizquestionset = await Promise.all(questions.map(async (q) => {
          const question = new quizquestion(q);
          await question.save();
          return question._id;
        }));
        const newQuiz = new Quiz({
          titleText,
          titleBold,
          titleItalic,
          titleUpperCase,
          descText,
          descBold,
          descItalic,
          descUpperCase,
          examDate,
          teacherInfo,
          questions: quizquestionset
        });
    
        await newQuiz.save();
    
        res.status(201).json({ success: true, data: newQuiz });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    
  });