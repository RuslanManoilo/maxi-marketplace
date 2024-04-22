import express from "express";
import userController from "./user.controller.js";
import { isEmptyBody, validateBody } from "../../helpers/index.js";
import { userSignUpScheme } from "./user.model.js";

const userRouter = express.Router();

userRouter.post('/signup', isEmptyBody, validateBody(userSignUpScheme), userController.signUp);

export default userRouter;