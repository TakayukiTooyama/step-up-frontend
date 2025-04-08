"use client";

import { useState } from "react";

/**
 * ＜問題＞
 * 1.features/01-basic/1-2/componentsに CountButtonコンポーネントを作成
 * 2.PropsとしてchildrenとonClickを受け取れるようにする
 * 3.exportし、下記のJSXを書き換える
 *
 * ＜目的＞
 * ・コンポーネントの作成し、共通化ができるようになる
 * ・childrenをPropsとして受け取れることを理解する
 * ・named exportの理解する
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
