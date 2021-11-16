const mongoose = require("mongoose");
//mongoose schemea consturctor
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 15,
  },
  email: {
    type: String,
    tirm: true,
    unique: 1,
  },
  password: {
    type: String,
    minLength: 5,
  },
  lastname: {
    type: String,
    minLength: 20,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
