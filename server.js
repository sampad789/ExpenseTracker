const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

// importing the env variables
dotenv.config({ path: "./config/config.env" });

//importing routes
const transactions = require("./routes/transactions");

// Initializing express
const app = express();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV}mode on port ${PORT}`.yellow.bold
  )
);
