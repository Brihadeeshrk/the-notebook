const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();

const posts = {};

app.use(cors({ origin: ["http://localhost:3000", "*"], credentials: true }));
app.use(bodyParser.json());

app.get("/posts", async (req, res, next) => {
  res.send(posts);
});

app.post("/posts", async (req, res, next) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", async (req, res) => {
  console.log("RECEIVED EVENT", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000 🚀");
});
