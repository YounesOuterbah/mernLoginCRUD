const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mern-crud");

const UserModel = require("./models/Users");

app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.post("/createUser", async (req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();
  res.json(req.body);
});

app.listen("5000", () => {
  console.log("Server Working!");
});
