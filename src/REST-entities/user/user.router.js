import express from "express";
import userController from "./user.controller.js";
import { isEmptyBody, validateBody } from "../../helpers/index.js";
import { userSignInScheme, userSignUpScheme } from "./user.model.js";

const userRouter = express.Router();

userRouter.post("/signup", isEmptyBody, validateBody(userSignUpScheme), userController.signUp);
userRouter.post("/signin", isEmptyBody, validateBody(userSignInScheme), userController.signIn);

export default userRouter;
