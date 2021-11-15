const mongoose = require("mongoose");
//mongoose schemea consturctor
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 15,
  },
  email: {
    type: String,
    type: true,
    uniq: true,
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
