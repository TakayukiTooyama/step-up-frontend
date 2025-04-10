import { fourWaitFetch } from "@/actions/fourWaitFetch";
import { twoWaitFetch } from "@/actions/twoWaitFetch";
import { Suspense } from "react";

/**
 * ＜問題＞
 * 1.Suspenseを使って並列処理を最適化する
 * 2.fallbackを設定する
 *
 * ＜目的＞
 * 1.Suspenseを使って並列処理を最適化できるようになる
 * 2.fallbackを設定できるようになる
 */
export const Mondai = async () => {
  return (
    <Suspense>
      <PromiseComponent1 />
    </Suspense>
  );
};

const PromiseComponent1 = async () => {
  const data1 = await fourWaitFetch();
  const data2 = await twoWaitFetch();

  return (
    <div>
      <p>{data1}</p>
      <p>{data2}</p>
    </div>
  );
};

const PromiseComponent2 = async () => {};
