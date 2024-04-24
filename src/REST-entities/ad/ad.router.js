import express from "express";
import adController from "./ad.controller.js";
import { authenticate, isEmptyBody, validateBody } from "../../helpers/index.js";
import { adScheme } from "./ad.model.js";

const adRouter = express.Router();

adRouter.use(authenticate);
adRouter.post("/", isEmptyBody, validateBody(adScheme), adController.createAd);

export default adRouter;
