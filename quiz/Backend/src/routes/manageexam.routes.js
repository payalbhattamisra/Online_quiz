import express from 'express';
import { manageExam } from "../models/manageexam.model.js";

const manageexamrouter = express.Router();

manageexamrouter.post('/create', async (req, res) => {
  try {
    const { titleText, descText, examDate, teacherInfo, questions } = req.body;
    const newExam = new manageExam({
      title: titleText,
      category: descText,
      examDate,
      status: 'Pending', // or any default status
    });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//fetch data from mongodb stored in manage exam
manageexamrouter.get('/api/exams', async (req, res) => {
  try {
    const exams = await manageExam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default manageexamrouter;
