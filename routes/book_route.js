import express from "express";
import Book from "../models/book.js";
import User from "../models/user.js";
import IssueRequest from "../models/bookIssueRequest.js";
const router = express.Router();

router.post("/addBook", async (req, res) => {
  const { title, author, year, copies } = req.body;
  try {
    const book = await Book.create(req.body);
    return res.status(201).send({ book, message: "successfully created" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.get("/allBook", async (req, res) => {
  try {
    // const books = await Book.find().sort({ createdAt: -1 });
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).send("server error");
  }
});

router.get("/count", async (req, res) => {
  try {
    const books = await Book.countDocuments();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).send("server error");
  }
});

router.post("/issue-bookRequest", async (req, res) => {
  const { bookId, userId } = req.body;
  console.log(userId, bookId);
  try {
    await IssueRequest.create({ bookId, userId });
    return res.status(200).send({ message: "Issue request submitted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "server error" });
  }
});

router.get("/issue-book", async (req, res) => {
  try {
    let data = await IssueRequest.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1, _id: 0 } }],
          as: "userDetails",
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "bookId",
          foreignField: "_id",
          pipeline: [{ $project: { _id: 0 } }],
          as: "bookDetails",
        },
      },
    ]);
    const requests = await IssueRequest.find()
      .populate("userId", "name")
      .populate("bookId", "title author");

    console.log(requests);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "server error" });
  }
});

export default router;
