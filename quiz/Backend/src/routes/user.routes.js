import { Router } from "express";
import { signupUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router= Router();
router.route("/signup").post(
    upload.fields([
        {
            name: "profilepic",
            maxCount: 1
        }
    ]),
    signupUser)
export default router