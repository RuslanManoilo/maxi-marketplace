import sequelize from "../db/db.js";
import app from "./app.js";

const { PORT = 6969 } = process.env;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server succesfully running on ${PORT} Port`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

start();