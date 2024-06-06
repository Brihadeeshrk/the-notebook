import React from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = React.useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };

  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold">Create a Post</h1>
      <form onSubmit={onSubmit} className="flex flex-col w-1/4">
        <label htmlFor="title" className="mt-2 text-lg text-gray-500">
          Title
        </label>
        <input
          className="border rounded-md p-1 mb-2"
          id="title"
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white font-normal p-1 rounded-md mt-2"
        >
          submit
        </button>
      </form>
    </div>
  );
}
