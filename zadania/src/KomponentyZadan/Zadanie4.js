import { useState } from "react";

export default function Zadanie4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (name && email) {
      alert("Imię: " + name + " Email: " + email);
      setEmail("");
      setName("");
    }
  }
  return (
    <div>
      <h2>Zadanie 4</h2>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Wyślij</button>
      </form>
      <hr />
    </div>
  );
}
