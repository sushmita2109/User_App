import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { user } from "./Data/user";
import { UsersCard } from "./Components/UsersCard";
import { NavBar } from "./Components/NavBar";

function App() {
  const [users_data, setUsers_data] = useState(user);

  return (
    <div className="App">
      <NavBar />
      {users_data.map((user) => (
        <UsersCard user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
