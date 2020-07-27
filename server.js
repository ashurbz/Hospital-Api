const express = require("express");
const app = express();
const mongoose = require("mongoose");

const route = require("./routes");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// connect to database
mongoose
  .connect("mongodb://localhost/hospital")
  .then(() => console.log("connected to db"))
  .catch((error) => console.error("error", error));

app.use(express.json()); // req.body middleware

app.use("/api", route);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
// connect to server
module.exports = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
