"use client";

import { useState } from "react";

/**
 * 問題1
 *
 *
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
