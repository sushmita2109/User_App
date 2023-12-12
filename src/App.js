import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { user } from "./Data/user";
import { UsersCard } from "./Components/UsersCard";
import { NavBar } from "./Components/NavBar";

function App() {
  const postData = async () => {
    const data = {
      first_name: "Johnette",
      last_name: "Daniell",
      email: "jdaniellrn@ed.gov",
      gender: "Female",
      avatar: "https://robohash.org/officiaetnihil.png?size=50x50&set=set1",
      domain: "UI Designing",
      available: true,
    };
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Success:", result);
    } catch (err) {
      console.log("This is err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="MainPage">
      <div className="App">
        <NavBar />
        {users_data.map((user) => (
          <UsersCard user={user} key={user.id} />
        ))}
      </div>
      <button onClick={postData}>Add User</button>
    </div>
  );
}

export default App;
