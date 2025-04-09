import { fourWaitFetch } from "@/actions/fourWaitFetch";
import { twoWaitFetch } from "@/actions/twoWaitFetch";
import { Suspense } from "react";

export const Answer = async () => {
  return (
    <>
      <Suspense>
        <PromiseComponent1 />
      </Suspense>
      <Suspense>
        <PromiseComponent2 />
      </Suspense>
    </>
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
