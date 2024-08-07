import express from "express" 
import cors from "cors" 
import cookieParser from "cookie-parser" 
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors())
app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true, limit: "20kb" }))
app.use(express.static("public"))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../public/quiz-questions.json')));

import userRouter from "./routes/user.routes.js"
app.use("/api/g1/users",userRouter)
import quizRouter from "./routes/quiz.routes.js";
app.use("/api/quiz", quizRouter);

import manageexamrouter from "./routes/manageexam.routes.js";
app.use('/api/exams', manageexamrouter);
 



export { app }