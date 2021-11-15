const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
mongoose
  .connect(
    "mongodb+srv://sreeharshR:Some1@hell@testcluster.fzjuf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT);
console.log(`This app is listening at ${PORT}`);
