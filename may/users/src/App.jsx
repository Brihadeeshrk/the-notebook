import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
    </>
  );
}

export default App;
