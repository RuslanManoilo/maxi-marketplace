import { HttpError } from "../index.js";

const validateBody = (scheme) => {
  const func = async (req, res, next) => {
    const { error } = scheme.validate(req.body);

    if (error) return next(HttpError(400, error.message));

    next();
  };
  return func;
};

export default validateBody;
