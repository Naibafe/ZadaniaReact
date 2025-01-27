import { useState } from "react";

export default function Zadanie7() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(0);
  const [output, setOutput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    switch (currency) {
      case 0:
        setOutput(Math.round(amount * kursy[0] * 100) / 100);
        break;
      case 1:
        setOutput(Math.round(amount * kursy[1] * 100) / 100);
        break;
      case 2:
        setOutput(Math.round(amount * kursy[2] * 100) / 100);
        break;
      default:
        setOutput("Błąd");
    }
  }
  const kursy = [0.24, 0.25, 0.2];
  return (
    <div>
      <h2>Zadanie 7</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(Number(e.target.value))}
        >
          <option value={0}>EUR</option>
          <option value={1}>USD</option>
          <option value={2}>GBP</option>
        </select>
        <button type="submit">Przelicz</button>
      </form>
      <p>{output}</p>
      <hr />
    </div>
  );
}
