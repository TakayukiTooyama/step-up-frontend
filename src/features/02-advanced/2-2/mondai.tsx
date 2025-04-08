import { Suspense } from "react";
import { fourWaitFetch } from "../../../actions/fourWaitFetch";
import { twoWaitFetch } from "../../../actions/twoWaitFetch";

/**
 * ＜問題＞
 * 1.Suspenseを使い、エラーを解決する
 * 2.直列から並列の非同期処理に修正する
 *
 * ＜目的＞
 * 1.Suspenseを使ってみる
 * 2.直列と並列の理解を深める
 */
export const Mondai = async () => {
  return (
    <Suspense>
      <PromiseComponent />
    </Suspense>
  );
};

const PromiseComponent = async () => {
  const data1 = await fourWaitFetch();
  const data2 = await twoWaitFetch();

  return (
    <>
      <p>{data1}</p>
      <p>{data2}</p>
    </>
  );
};
