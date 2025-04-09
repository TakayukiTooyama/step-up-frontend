"use client";

import { Input } from "@/components/elements/form/Input";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export const Answer = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
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

  const handleCompletedChange = (id: string) => {
    const newTodo = todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });
    setTodos(newTodo);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-lg font-bold mb-2">TODOリスト</h2>
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-2">
        <Input
          onChange={handleInputChange}
          value={inputText}
          className="text-black rounded-lg py-1 px-2"
        />
        <Button type="submit">追加</Button>
      </form>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompletedChange={handleCompletedChange}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

/**
 * タスクのリストアイテム
 * ↓ このようなUI
 * [] タスク名 x
 * [x] タスク名 x
 */
type TodoListItemProps = {
  todo: Todo;
  onCompletedChange: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};
const TodoListItem = ({ todo, onCompletedChange, onDeleteTodo }: TodoListItemProps) => {
  return (
    <li key={todo.id} className={`flex items-center gap-2  ${todo.completed && "opacity-40"}`}>
      <input
        type="checkbox"
        className="size-4 hover:cursor-pointer"
        checked={todo.completed}
        onChange={() => onCompletedChange(todo.id)}
      />
      <p>{todo.text}</p>
      <Button
        size="icon"
        type="button"
        onClick={() => onDeleteTodo(todo.id)}
        className="bg-red-400 hover:bg-red-500"
      >
        <Trash2 className="size-4" />
      </Button>
    </li>
  );
};
