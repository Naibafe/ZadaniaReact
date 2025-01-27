import { useState } from "react";

export default function Zadanie8() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (name && email) {
      setEmail("");
      setName("");
      const newUser = { id: Date.now(), name: name, email: email };
      setUsers([...users, newUser]);
    }
  }
  function handleDeleteUser(id) {
    setUsers((u) => u.filter((u) => u.id !== id));
  }
  function handleEditUser(id) {
    setIsEditing(id);
  }
  function handleEdit(e) {
    e.preventDefault();
    if (nameEdit && emailEdit) {
      setEmailEdit("");
      setNameEdit("");
      const editedUser = { id: isEditing, name: nameEdit, email: emailEdit };
      setUsers((users) => users.filter((u) => u.id !== isEditing));
      setUsers((users) => [...users, editedUser]);
      setIsEditing(null);
    }
  }
  return (
    <div>
      <h2>Zadanie 8</h2>
      <form onSubmit={(e) => handleAdd(e)}>
        <h3>Dodaj użytkownika</h3>
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
        <button type="submit">Dodaj</button>
      </form>
      <ol>
        {users.map((u, i) => (
          <li key={i}>
            {u.name} {u.email}{" "}
            <button onClick={() => handleDeleteUser(u.id)}>X</button>
            <button onClick={() => handleEditUser(u.id)}>Edytuj</button>
          </li>
        ))}
      </ol>
      {isEditing && (
        <form onSubmit={(e) => handleEdit(e)}>
          <h3>Edytuj użytkownika</h3>
          <input
            type="text"
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          />
          <input
            type="email"
            value={emailEdit}
            onChange={(e) => setEmailEdit(e.target.value)}
          />
          <button type="submit">Zatwierdź</button>
        </form>
      )}
    </div>
  );
}
