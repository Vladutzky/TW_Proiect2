// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

// Application
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./controller/Controller'))

// Starting the server
app.listen("4600", () =>
  console.log("Server started at: http://localhost:4600")
);