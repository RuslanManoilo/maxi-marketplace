import sequelize from "../../db/db.js";
import { DataTypes } from "sequelize";
import Joi from "joi";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  full_name: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

export const userSignUpScheme = Joi.object({
  login: Joi.string().max(32).required(),
  password: Joi.string().min(6).required(),
  full_name: Joi.string().max(32),
  phone: Joi.string().min(6).max(20),
});

export const userSignInScheme = Joi.object({
  login: Joi.string().max(32).required(),
  password: Joi.string().min(6).required(),
});

export default User;
