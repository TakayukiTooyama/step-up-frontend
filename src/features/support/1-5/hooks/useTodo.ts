import { Todo } from "@/types";
import { useState } from "react";

export const useTodo = () => {
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

  return {
    inputText,
    todos,
    handleInputChange,
    handleCompletedChange,
    handleAddTodo,
    handleDeleteTodo,
  };
};
