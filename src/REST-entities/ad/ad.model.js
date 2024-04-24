import sequelize from "../../db/db.js";
import { DataTypes } from "sequelize";
import Joi from "joi";

const businessList = ["private", "business"];
const conditionlist = ["new", "perfect", "very_good", "good", "acceptable"];
const colorList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "gray",
  "other",
];

const Ad = sequelize.define("ad", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  img: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, defaultValue: '' },
  price: { type: DataTypes.STRING },
  business_type: { type: DataTypes.ENUM(...businessList), allowNull: false },
  condition: { type: DataTypes.ENUM(...conditionlist), allowNull: false },
  color: { type: DataTypes.ENUM(...colorList), allowNull: false },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
});

export const adScheme = Joi.object({
  img: Joi.string().allow('').optional(),
  title: Joi.string().max(100).required(),
  category: Joi.string().required(),
  description: Joi.string().max(1000).allow('').optional(),
  price: Joi.string().required(),
  business_type: Joi.string().valid(...businessList).required(),
  condition: Joi.string().valid(...conditionlist).required(),
  color: Joi.string().valid(...colorList).required(),
});

export default Ad;
