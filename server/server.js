// CREATE SERVER
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// CONNECT TO DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mern-crud");

// IMPORT USER MODEL
const UserModel = require("./models/Users");

// GET REQUEST
app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// POST REQUEST
app.post("/createUser", async (req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();
  res.json(req.body);
});

// PORT
const PORT = "5000";
app.listen(PORT, () => {
  console.log("Server Working!");
});
