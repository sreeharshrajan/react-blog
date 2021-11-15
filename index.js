const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { User } = require("./models/users");

const app = express();
const PORT = 5000;
mongoose
  .connect(
    "mongodb+srv://sreeharshR:Some1@hell@testcluster.fzjuf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  
  return res.status(200);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT);
console.log(`This app is listening at ${PORT}`);
