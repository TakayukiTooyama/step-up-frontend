"use client";

import { useTodo } from "./hooks/useTodo";

export const Answer = () => {
  const {
    inputText,
    todos,
    handleInputChange,
    handleAddTodo,
    handleCompletedChange,
    handleDeleteTodo,
  } = useTodo();

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
