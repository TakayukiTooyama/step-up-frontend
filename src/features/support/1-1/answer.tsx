"use client";

import { useState } from "react";

export const Answer = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
};
