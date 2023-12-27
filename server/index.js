const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/CRUD");

app.get("/getAll", (req, res) => {
  UserModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id; // Retrieve ID from URL parameters
  const { Name, Email, Age } = req.body; // Retrieve updated user data from request body

  try {
    UserModel.findByIdAndUpdate(id, { Name, Email, Age }, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: "Could not update user data", details: err });
      });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is Running");
});
