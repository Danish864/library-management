import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import loginRoute from "./routes/user_route.js";
import bookRoute from "./routes/book_route.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://danish:danish@cluster0.drhso.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

app.use("/books", bookRoute);
app.use("/user", loginRoute);


app.listen(9002, () => {
  console.log("server started at port 9002");
});
