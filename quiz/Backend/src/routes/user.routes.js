import { Router } from "express";
import { createQuiz } from "../controllers/quiz.controllers.js";
 import { signupUser,loginUser, logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
 
const userRouter= Router();
userRouter.route("/signup").post(
    upload.fields([
        {
            name: "profilepic",
            maxCount: 1
        }
    ]),
    signupUser
);
userRouter.route("/create").post(createQuiz);
userRouter.route("/Login").post(loginUser);
userRouter.route("/logout").post(logoutUser)
 
export default userRouter