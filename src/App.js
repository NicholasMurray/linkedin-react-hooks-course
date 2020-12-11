import React, { useReducer } from "react";
import "./style.css";

export default function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
    <input
      type="checkbox"
      value={checked}
      onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
  </>
  );
}
