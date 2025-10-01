const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

// const user = require("./models/user");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://localhost:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());

// Temporary authorization middleware - hardcoded user for testing
app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // Replace with your test user ID
  };
  next();
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
