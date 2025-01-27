import { useState } from "react";

export default function Zadanie3() {
  const [theme, setTheme] = useState("dark");
  function handleThemeChange() {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "white";
    } else {
      setTheme("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <div>
      <h2>Zadanie3</h2>
      <button onClick={handleThemeChange}>Change Theme</button>
      <hr />
    </div>
  );
}
