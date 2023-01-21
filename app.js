const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const m = (req, res, next) => {
  const age = 123;
  if (age === 123) {
    req.age = 123;
    next();
  } else {
    throw new Error("Not 123");
  }
};

app.use(m);

app.get("/", (req, res) => {
  const re = (req.name = "hesham");
  res.status(200).json({ re });
});

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hesham:12345@taskscluster.qkvkryd.mongodb.net/tests"
    );
    app.listen(3000, () => {
      console.log(`http://localhost:${3000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
