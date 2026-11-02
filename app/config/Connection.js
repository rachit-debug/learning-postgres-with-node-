
const { Sequelize } = require("sequelize");
require("dotenv").config();

const Connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  }
);

const connectDb = async () => {
  try {
    await Connection.authenticate();

    console.log("DB connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDb, Connection };
