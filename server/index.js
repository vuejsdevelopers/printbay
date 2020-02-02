const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});
const mongoose = require("mongoose");
const { PORT, NODE_ENV, MONGO_DB_URI, DB_NAME, DB_NAME_TEST, E2E } = process.env;

const isTest = NODE_ENV === "test" || E2E;

const dbName = isTest ? DB_NAME_TEST : DB_NAME;
mongoose.connect(`${MONGO_DB_URI}/${dbName}`, {
  useNewUrlParser: true, useCreateIndex: true
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/items", require("./routes/items"));
app.use("/users", require("./routes/users"));

app.use("/public", express.static(path.join(__dirname, "..", "public")));
if (NODE_ENV === "production") {
  const staticFiles = express.static(path.join(__dirname, "..", "dist"));
  app.use(staticFiles);
  app.use(require("connect-history-api-fallback")({
    index: "/",
    disableDotRule: true,
    verbose: true
  }));
  app.use(staticFiles);
}

if (!isTest) {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
