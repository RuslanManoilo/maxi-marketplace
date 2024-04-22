import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "./user.model.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";

const { JWT_SECRET } = process.env;

const signUp = async (req, res) => {
  const { login, password, phone, full_name } = req.body;

  const user = await User.findOne({ where: { login } });
  if (user) throw HttpError(409, "Email in use");

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    full_name,
    login,
    password: hashPassword,
    phone,
  });

  const payload = { id: newUser.id, login };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  res.status(201).json({
    token,
    user: {
      full_name: newUser.full_name,
      login: newUser.login,
      phone: newUser.phone,
    },
  });
};

export default {
  signUp: ctrlWrapper(signUp),
};
