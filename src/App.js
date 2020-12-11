import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(setUsers);
  }, []);

  if (users) {
    console.log(users);
    return (
      <div>
        <p>Github Users</p>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setUsers([])}>Remove Data</button>
      </div>
    );
  }
  return <p>No users</p>;
}
