import { createRoot } from "react-dom/client";
import React from "react";

function App(): JSX.Element {
  return (
    <div>
      <h3>Hello There! What is your name?</h3>
      <input></input>
      <button onClick={() => alert("Hello")}>Say Hello</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

//test

root.render(<App />);
