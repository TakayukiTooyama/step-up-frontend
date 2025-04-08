"use client";

import { useState } from "react";

/**
 * ＜問題＞
 * 1.features/react-basic/1-2/components/Counter.tsxを作成し、Counter コンポーネントを作成
 * 2.exportし、下記のJSXを書き換える
 *
 * ＜目的＞
 * ・コンポーネントの作成
 * ・named exportの理解
 */
export const Answer = () => {
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
