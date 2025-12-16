import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, completed: !e.completed } : e
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
