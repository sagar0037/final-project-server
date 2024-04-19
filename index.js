// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("./mongodb");
const apiRouter = require("./api");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRouter);

// to run the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
