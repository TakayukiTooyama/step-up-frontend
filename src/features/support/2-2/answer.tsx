import { fourWaitFetch } from "@/actions/fourWaitFetch";
import { twoWaitFetch } from "@/actions/twoWaitFetch";
import { Suspense } from "react";

export const Answer = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PromiseComponent1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PromiseComponent2 />
      </Suspense>
    </div>
  );
};

const PromiseComponent1 = async () => {
  const data1 = await fourWaitFetch();

  return <p>{data1}</p>;
};

const PromiseComponent2 = async () => {
  const data2 = await twoWaitFetch();

  return <p>{data2}</p>;
};
