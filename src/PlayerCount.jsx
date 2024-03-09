import { useState } from "react";

export default function () {
  const [count, setCount] = useState(11);
  const AddPlayerCount = () => {
    const newPlayerCount = count + 1;
    setCount(newPlayerCount);
  };
  const ReducePlayerCount = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        border: "5px solid purple",
        padding: "20px",
        margin: "20px",
        borderRadius: "30px",
      }}
    >
      <h3>Players : {count}</h3>
      <button onClick={AddPlayerCount} style={{ marginRight: "20px" }}>
        Add
      </button>
      <button onClick={ReducePlayerCount}>Reduce</button>
    </div>
  );
}
