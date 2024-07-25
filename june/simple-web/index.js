const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hi World!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080 🚀");
});
