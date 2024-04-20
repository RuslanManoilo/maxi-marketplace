import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_HOST } = process.env;

export const sequelize = new Sequelize(DB_HOST as string, {
  dialect: "postgres",
  logging: false,
});
