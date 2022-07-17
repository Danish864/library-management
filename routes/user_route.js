import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("request comming");
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        console.log(user);
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

router.get("/count", async (req, res) => {
  try {
    const user = await User.countDocuments();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("server error");
  }
});

export default router;
