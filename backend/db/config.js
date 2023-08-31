const mongoose = require("mongoose");

const DB = "mongodb://0.0.0.0:27017/Strip";

console.log(DB);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.log(err));
