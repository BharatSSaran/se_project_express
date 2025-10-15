const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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

app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
