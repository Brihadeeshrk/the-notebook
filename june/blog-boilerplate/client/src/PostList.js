import React from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = React.useState({});

  React.useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      const posts = await axios.get("http://localhost:4000/posts");

      setPosts(posts.data);
    };

    if (!ignore) fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  const renderPosts = Object.values(posts).map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="flex my-3 space-x-2">{renderPosts}</div>
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="flex-col bg-pink-200 p-3 rounded-md w-1/5">
      {post.title}
      <CommentList postId={post.id} />
      <CommentCreate postId={post.id} />
    </div>
  );
}
