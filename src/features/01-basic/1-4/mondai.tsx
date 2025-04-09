"use client";

import { Input } from "@/components/elements/form/Input";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types";

/**
 * ＜問題＞
 * 1.空配列を初期値としたuseStateを作成（状態名はtodos, Todo型は作成済み）
 * 2.""を初期値としたuseStateを作成（状態名はinputText）
 * 3.inputを入力したら、inputTextの値が更新されるようにする
 * 4.追加ボタンをクリックしたら、inputTextの値がtodosに追加されるようにする（画面上にも表示）
 * 5.checkboxのチェックが入ったら、todoのcompletedがtrueになるようにする
 * 6.todoを削除できるようにする
 *
 * ＜補足＞
 * ・idはcrypto.randomUUID()で作成できます
 *
 * ＜目的＞
 * 1.配列操作の復習（map,filter）
 * 2.分割代入を使ってみる
 * 3.基本的なCRUDをマスターする
 */
export const Mondai = () => {
  const handleInputChange = () => {};

  const handleAddTodo = () => {};

  const handleCompletedChange = () => {};

  const handleDeleteTodo = () => {};

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-lg font-bold mb-2">TODOリスト</h2>
      <form onSubmit={() => {}} className="flex gap-2">
        <Input onChange={() => {}}/>
        <Button type="submit">追加</Button>
      </form>
      <ul className="flex flex-col gap-2">
        {/* <TodoListItem/> */}
      </ul>
    </div>
  );
}

/**
 * タスクのリストアイテム
 * ↓ このようなUI
 * [] タスク名 🗑️
 * [x] タスク名 🗑️
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
