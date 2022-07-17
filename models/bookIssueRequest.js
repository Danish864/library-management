import mongoose from "mongoose";

const issueRequest = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const IssueRequest = mongoose.model("IssueRequest", issueRequest);
export default IssueRequest;
