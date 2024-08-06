import express from 'express';
import { manageExam } from './models/manageExam';

const manageexamrouter = express.Router();

manageexamrouter.post('/api/g1/users/create', async (req, res) => {
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

export default manageexamrouter;
