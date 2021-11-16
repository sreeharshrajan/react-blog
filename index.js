const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("./config/db.config");

const auth = require("./middlewares/auth");
const errors = require("./middlewares/error");

const unless = require("express-unless");

const app = express();

mongoose.Promise = global.Promise; //for global sharing
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (error) => {
      console.log("Failed to Connect the Database" + error);
    }
  );
auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      //Checks registered or not
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
    ],
  })
);

app.use(express.json());

app.use("/users", require("./routes/user.routes"));

app.use(errors.errorHandler);

const PORT = process.env.port || 4000;

app.listen(PORT, function () {
  console.log(`Server Running at ${PORT}`);
});
