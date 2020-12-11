import React, { useReducer } from "react";
import "./style.css";

const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      };
  }
}

export default function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>Yell</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
    </>
  );
}