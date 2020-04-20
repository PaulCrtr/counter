import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input
        value={isNaN(count) ? setCount(0) : count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        placeholder="valeur de départ"
      ></input>
    </div>
  );
}

export default Counter;
