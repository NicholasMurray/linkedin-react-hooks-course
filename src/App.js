import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("Jill");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is ${admin ? 'admin' : 'not admin' }`);
  }, [admin])
;
  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>
        Change Winner
      </button>
      <p>{admin ? 'logged in' : 'not logged in' }</p>
      <button onClick={() => setAdmin(true)}>
        Log In
      </button>
    </section>
  );
}
