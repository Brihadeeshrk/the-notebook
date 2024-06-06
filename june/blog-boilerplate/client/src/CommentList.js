import React from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    let ignore = false;

    const fetchComments = async () => {
      const comments = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(comments.data);
    };

    if (!ignore) {
      fetchComments();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="flex-col p-1 bg-orange-300">
      <div>{comments.length} Comments</div>

      {comments.map((comment) => {
        return <li key={comment.id}>{comment.comment}</li>;
      })}
    </div>
  );
}
