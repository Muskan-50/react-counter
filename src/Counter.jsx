import React, { useState } from "react";
import "./App.css";   // <-- Make sure this is imported

function Counter() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 10;

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  const reset = () => setCount(0);

  const buttonStyle = {
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    margin: "0.5rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div className="fullscreen">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
          Counter: {count}
        </h1>

        <button
          onClick={increment}
          disabled={count === max}
          style={{
            ...buttonStyle,
            backgroundColor: count === max ? "#ccc" : "#4CAF50",
            color: "white",
          }}
        >
          +
        </button>

        <button
          onClick={decrement}
          disabled={count === min}
          style={{
            ...buttonStyle,
            backgroundColor: count === min ? "#ccc" : "#f44336",
            color: "white",
          }}
        >
          -
        </button>

        <button
          onClick={reset}
          style={{ ...buttonStyle, backgroundColor: "#2196F3", color: "white" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
