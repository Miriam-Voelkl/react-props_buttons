import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked a button");
  }
  return (
    <>
      <Button text="click me" color="limegreen" onClick={handleClick} />
      <Button text="no click me" color="hotpink" onClick={handleClick} />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
