import { useState } from "react";
import { useTodos } from "./contex";

export default function App() {
  const [text, setText] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Todo"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map((e) => (
          <div key={e.id}>
            <span
              onClick={() => toggleTodo(e.id)}
              style={{
                cursor: "pointer",
                textDecoration: e.completed ? "line-through" : "none",
              }}
            >
              {e.text}
            </span>
            <button onClick={() => removeTodo(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
