"use client";

import { Todo } from "@/types";

/**
 * ＜問題＞
 * 1.空配列を初期値としたuseStateを作成（状態名はtodos）
 * 2.inputTextを初期値としたuseStateを作成（状態名はinputText）
 * 3.inputTextを入力したら、inputTextをtodosに追加する
 * 4.todosを表示する
 * 5.todosを削除する
 *
 * ＜目的＞
 * 1.配列操作の復習（map,filter）
 * 2.分割代入を使ってみる
 * 3.基本的なCRUDをマスターする
 */
export const Mondai = () => {
  const handleInputChange = () => {};

  const handleCompletedChange = () => {};

  const handleAddTodo = () => {};

  const handleDeleteTodo = () => {};

  return (
    <div className="p-4">
      <form onSubmit={() => {}} className="flex gap-2">
        <input type="text" onChange={() => {}} className="text-black rounded-lg py-1 px-2" />
        <button type="submit">追加</button>
      </form>
      <ul>{/* <TodoListItem/> */}</ul>
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
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      <p>{todo.text}</p>
      <button type="button" onClick={() => {}}>
        x
      </button>
    </li>
  );
};
