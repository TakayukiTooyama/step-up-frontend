"use client";

import { Todo } from "@/types";
import { useState } from "react";

export const Answer = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleCompletedChange = (id: string) => {
    const newTodo = todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });
    setTodos(newTodo);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      completed: false,
      text: inputText,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputText("");
  };

  const handleDeleteTodo = (id: string) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleAddTodo} className="flex gap-2">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputText}
          className="text-black rounded-lg py-1 px-2"
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center gap-2  ${todo.completed && "opacity-40"}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompletedChange(todo.id)}
            />
            <p>{todo.text}</p>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
