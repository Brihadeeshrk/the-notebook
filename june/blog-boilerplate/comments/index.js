const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();

const commentsByPostId = {};

app.use(cors({ origin: ["http://localhost:3000", "*"], credentials: true }));
app.use(bodyParser.json());

app.get("/posts/:id/comments", async (req, res, next) => {
  const { id } = req.params;

  res.send(commentsByPostId[id] || []);
});

app.post("/posts/:id/comments", async (req, res, next) => {
  const commentId = randomBytes(4).toString("hex");
  const { id } = req.params;
  const { comment } = req.body;

  const existingComments = commentsByPostId[id] || [];
  existingComments.push({ id: commentId, comment });

  commentsByPostId[id] = existingComments;

  res.status(201).send(commentsByPostId[id]);
});

app.listen(4001, () => {
  console.log("Server is listening on port 4001 🚀");
});
