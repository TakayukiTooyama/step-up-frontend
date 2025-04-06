"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export const Explanation: React.FC = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleCountClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.info("count", count);
  };

  const handlePrevCountClick = () => {
    setPrevCount((prev) => prev + 1);
    setPrevCount((prev) => prev + 1);
    setPrevCount((prev) => prev + 1);
    console.info("prevCount", prevCount);
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-2">
        <p>count: {count}</p>
        <Button size="sm" type="button" onClick={handleCountClick}>
          <PlusIcon size={16} />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <p>prevCount: {prevCount}</p>
        <Button size="sm" type="button" onClick={handlePrevCountClick}>
          <PlusIcon size={16} />
        </Button>
      </div>
    </>
  );
};
