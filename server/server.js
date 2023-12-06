// CREATE SERVER
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const bcrypt = require("bcrypt");

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

// IMPORT ADMIN MODEL
const AdminModel = require("./models/Admins");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const admin = await AdminModel.findOne({ username });

  admin && res.json({ message: "user already exists!" });

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newAdmin = new AdminModel({ username, password: hashedPassword });
  await newAdmin.save();

  return res.json({ message: "user created succefully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await AdminModel.findOne({ username });

  !admin && res.json({ message: "admin dosent exists" });
});

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server Working!");
});
