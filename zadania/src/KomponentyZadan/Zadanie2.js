import { useState } from "react";

export default function Zadanie2() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Zadanie2</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Dodaj</button>
      <button onClick={() => setCounter((c) => c - 1)}>Odejmij</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <hr />
    </div>
  );
}
