const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//temporary import
//const bodyParser = require("body-parser");

// importing the environment variables
dotenv.config({ path: "./config/config.env" });

//importing routes
const transactions = require("./routes/transactions");

// Initializing express
const app = express();

//TODO  remove this is no errors without body parser
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// NOTE This can be used instead  of body-parser middleware
app.use(express.json());

//Initializing mongodb

connectDB();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
