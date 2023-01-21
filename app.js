require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
  const age = 123;
  if (age === 123) {
    req.name = "Hesham";
    next();
  } else {
    throw new Error("Not 123");
  }
};

app.use(middleware);

app.get("/", (req, res) => {
  res.status(200).json({ "req.name": req.name });
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
