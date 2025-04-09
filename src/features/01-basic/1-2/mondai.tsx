"use client";

import { useState } from "react";

/**
 * ＜問題＞
 * 1.features/01-basic/1-2/componentsに CountButtonコンポーネントを作成
 * 2.PropsとしてchildrenとonClickを受け取れるようにする
 * 3.exportし、下記のJSXを書き換える
 * 4.CountButtonの見た目を調整しよう。コピペでOK。（className="rounded-lg border px-2.5 py-0.5 text-xs hover:bg-gray-50"）
 *
 * ＜目的＞
 * ・コンポーネントの作成し、共通のUIを作成できるようになる
 * ・childrenをPropsとして受け取れることを理解する
 * ・named exportの理解を深める
 */
export const Mondai = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
};
