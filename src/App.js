import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <p>Github Users</p>
        <ul>
          {data.map(user => {
            <li key={user.id}>{user.login}</li>;
          })}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }
  return <p>No users</p>;
}
