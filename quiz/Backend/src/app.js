import express from "express" 
import cors from "cors" 
import cookieParser from "cookie-parser" 

const app = express()
app.use(cors())
app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true, limit: "20kb" }))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
app.use("/api/g1/users",userRouter)
import quizRouter from "./routes/quiz.routes.js";
app.use("/api/quiz", quizRouter); // Use the quiz routes
export { app }