const { red, bgCyan } = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI);
    console.log(`DataBase Connected : ${conn.connection.host} `.white.bgBlue);
  } catch (error) {
    console.log(`DataBase Not connected`, error.message.red);
  }
};

module.exports = connectDB;
