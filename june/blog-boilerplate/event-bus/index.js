const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000", "*"], credentials: true }));

app.post("/events", async (req, res, next) => {
  const event = req.body;

  await axios
    .post("http://localhost:4000/events", event)
    .catch((err) => console.error(err.message)); // POSTS
  await axios
    .post("http://localhost:4001/events", event)
    .catch((err) => console.error(err.message)); // COMMENTS
  await axios
    .post("http://localhost:4002/events", event)
    .catch((err) => console.error(err.message)); // QUERY

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Server is listening on port 4005 🚀");
});
