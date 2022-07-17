import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    author: {
      type: String,
    },

    year: {
      type: Number,
    },

    copies: {
      type: Number,
      default: 1,
    },
    issueTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
