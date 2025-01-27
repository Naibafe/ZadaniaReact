import { useState } from "react";

export default function Zadanie5() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function handleRandom() {
    alert(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return (
    <div>
      <h2>Zadanie 5</h2>
      <input
        type="number"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
      <button onClick={handleRandom}>Wylosuj</button>
      <hr />
    </div>
  );
}
