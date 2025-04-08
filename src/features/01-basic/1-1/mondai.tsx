"use client";

import { useState } from "react";

/**
 * ＜問題＞
 * 1.カウントが-1されるボタンの追加
 * 2.カウントがリセットされるボタンの追加
 *
 * ＜目的＞
 * 1.useStateの理解を深める
 * 2.JSXの理解を深める
 */
export const Mondai = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
};
