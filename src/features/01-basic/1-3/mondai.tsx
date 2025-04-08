"use client";

/**
 * ＜問題＞
 * 1.DateBadgeにPropsとして日付を渡せるようにする
 * 2.2025/04/09と表示する
 * 3.2025/05/09と表示する
 *
 * ＜条件＞
 * Mondaiコンポーネントで<div>タグは使用しない
 *
 * ＜目的＞
 * 1.Propsの理解を深める
 * 2.フラグメントを使ってみる
 * 3.テンプレートリテラルを使ってみる
 */
export const Mondai: React.FC = () => {
  // divタグ禁止
  return <div />;
};

/**
 * 日付を表示するバッジのコンポーネント
 */
type DateBadgeProps = {
  date: Date;
};
const DateBadge = () => {
  return <div className="inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs"></div>;
};
