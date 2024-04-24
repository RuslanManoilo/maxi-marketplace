import jwt from "jsonwebtoken";
import "dotenv/config";

import User from "../../REST-entities/user/user.model.js";
import { HttpError } from "../index.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(HttpError(401, "Not authorized"));

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: id });

    if (!user) throw HttpError(401, "Not authorized");

    req.user = user.dataValues;
    next();
  } catch (error) {
    next(HttpError(401, error.message));
  }
};

export default authenticate;
