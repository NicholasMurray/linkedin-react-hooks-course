import React, { useReducer } from "react";
import "./style.css";
import { useInput } from './useInput';

export default function App() {

const [titleProps, resetTitle] = useInput("");
const [colourProps, resetColour] = useInput("#000000");

const submit =  (e) => {
  e.preventDefault();
  alert(`${titleProps.value} sounds like ${colourProps.value}`);
  resetTitle("");
  resetColour("#000000");
};

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps}
        type="text"
        placeholder="Sound..."
      />
      <input
        {...colourProps}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}