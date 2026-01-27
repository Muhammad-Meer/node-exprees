import mongoose from "mongoose";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("/ kaam ker raha ha");
  res.send("Server chal raha hai");
});

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://muhabbatali:myworldisstart%24%24%24@cluster0.fepov5t.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB connect ho gaya");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB error:", error.message);
  });
