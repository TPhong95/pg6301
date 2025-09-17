import { createRoot } from "react-dom/client";
import React, { useState } from "react";

function Application() {
  const [tasks, setTasks] = useState([
    { description: "Something" },
    { description: "Something else" },
  ]);
  return (
    <>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.description}</li>
        ))}
      </ul>
    </>
  );
}

createRoot(document.getElementById("app")).render(<Application />);
