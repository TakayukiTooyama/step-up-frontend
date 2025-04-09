import { fourWaitFetch } from "@/actions/fourWaitFetch";
import { twoWaitFetch } from "@/actions/twoWaitFetch";
import { Suspense } from "react";

export const Answer = async () => {
  return (
    <Suspense>
      <PromiseComponent />
    </Suspense>
  );
};

const PromiseComponent = async () => {
  const [data1, data2] = await Promise.all([fourWaitFetch(), twoWaitFetch()]);

  return (
    <div>
      <p>{data1}</p>
      <p>{data2}</p>
    </div>
  );
};
