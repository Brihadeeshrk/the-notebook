const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const posts = {};

/**
 * example of the data struct is going to look
 * posts = {
 *  'ehgdeh': {
 *      id: 'ehgdeh',
 *      title: 'title',
 *      comments: [
 *          {
 *              id: '34773d',
 *              comment: 'djhfjs'
 *          }
 *      ]
 *  }
 * }
 */

app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000", "*"], credentials: true }));

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res, next) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = req.body.data;

    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, comment, postId } = req.body.data;

    const post = posts[postId];
    post.comments.push({ id, comment });
  }

  console.log("POSTS", posts);

  res.send({});
});

app.listen(4002, () => {
  console.log("Server is listening on port 4002  🚀");
});
