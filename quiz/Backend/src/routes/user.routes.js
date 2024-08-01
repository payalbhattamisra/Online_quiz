import { Router } from "express";
import { signupUser,loginUser ,createQuiz,addQuestionToQuiz } from "../controllers/user.controller.js";
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

userRouter.route("/Login").post(loginUser);
userRouter.route("/create").post(createQuiz);
userRouter.route("/add-question").post(addQuestionToQuiz);

export default userRouter