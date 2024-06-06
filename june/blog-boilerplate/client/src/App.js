import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
  return (
    <div className="p-4 space-y-4">
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}
