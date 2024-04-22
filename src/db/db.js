import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_HOST } = process.env;

const sequelize = new Sequelize(DB_HOST, {
  dialect: "postgres",
  logging: false,
});


export default sequelize;