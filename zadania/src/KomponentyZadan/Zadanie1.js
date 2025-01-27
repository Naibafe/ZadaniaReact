import { useState } from "react";

export default function Zadanie1() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  function handleDeleteTask(te) {
    setTaskList((taskList) => taskList.filter((t) => t !== te));
  }
  return (
    <div>
      <h2>Zadanie 1</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTaskList([...taskList, task]);
          setTask("");
        }}
      >
        DODAJ
      </button>
      <ol>
        {taskList.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => handleDeleteTask(t)}>X</button>
          </li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
