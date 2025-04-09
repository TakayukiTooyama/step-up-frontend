"use client";

import { useState } from "react";
import { CountButton } from "./components/CountButton";

export const Answer = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <CountButton onClick={() => setCount((prev) => prev - 1)}>-</CountButton>
      <p>{count}</p>
      <CountButton onClick={() => setCount((prev) => prev + 1)}>+</CountButton>
      <CountButton onClick={() => setCount(0)}>リセット</CountButton>
    </div>
  );
};
