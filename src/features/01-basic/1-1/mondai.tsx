"use client"; /**
 * ＜問題＞
 * 1.カウントが+1されるボタンを完成させる(状態名はcountとする)
 * 2.カウントが-1されるボタンの追加
 * 3.カウントがリセットされるボタンの追加
 *
 * ＜目的＞
 * 1.useStateの理解を深める
 * 2.JSXの理解を深める
 */
export const Mondai = () => {
  return (
    <div className="flex items-center gap-4">
      {/* <p>{count}</p> */}
      <button type="button">+</button>
    </div>
  );
};
