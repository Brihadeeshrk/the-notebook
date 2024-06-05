import React from "react";

export default function PostCreate() {
  const [title, setTitle] = React.useState();

  const onSubmit = (e) => {
    e.preventDefault();

    setTitle("");
  };

  return (
    <>
      <h1>Create a Post</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
