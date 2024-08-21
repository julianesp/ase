// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ase");

    console.log("MongoDB connected successfully");

    // const connection = mongoose.connection;

    // connection.on("error", (err) => {
    //   console.error("MongoDB connection error:", err);
    //   process.exit(1);
    // });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    // process.exit(1);
  }
};

module.exports = connectDB;
