const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/keys");

const { User } = require("./model/user");

const app = express();
const PORT = 5000;
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200);
  });
});

app.get("/", (req, res) => {
  res.json({ "hollo~": "Hi~~Sree" });
});

app.listen(PORT);
console.log(`This app is listening at ${PORT}`);
