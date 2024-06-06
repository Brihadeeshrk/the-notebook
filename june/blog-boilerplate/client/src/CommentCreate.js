import React from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [comment, setComment] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      comment,
    });

    setComment("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="comment" className="mt-2 text-sm text-gray-500 mb-0">
          Add Comment
        </label>
        <input
          id="comment"
          className="border rounded-md p-1 mb-2"
          type="text"
          placeholder="enter comment"
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white font-normal p-1 rounded-md mt-2"
        >
          submit
        </button>
      </form>
    </>
  );
}
