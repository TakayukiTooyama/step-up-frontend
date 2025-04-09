"use client";

/**
 * ＜問題＞
 * 1.todayとDateBadge1を使い、今日の日付が表示されたバッジを作成する
 * 2.todayとDateBadge2を使い、2025/05/09と表示されたバッジを作成する
 *
 * ＜条件＞
 * 型を変えずに渡すPropsを変えましょう
 *
 * ＜目的＞
 * 1.Propsの理解を深める
 * 2.テンプレートリテラルを使ってみる
 */
export const Mondai: React.FC = () => {
  const today = new Date();
  return (
    <div>
      {/* <DateBadge1 /> */}
      {/* <DateBadge2 /> */}
    </div>
  );
};

/**
 * 日付を表示するバッジのコンポーネント
 */
type DateBadge1Props = {
  date: {
    year: number;
    month: number;
    day: number;
  };
};
const DateBadge1 = ({ date }: DateBadge1Props) => {
  return (
    <div className="inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs">
      {date.year}/{date.month}/{date.day}
    </div>
  );
};

/**
 * 日付を表示するバッジのコンポーネント
 */
type DateBadge2Props = {
  date: string
};
const DateBadge2= ({ date }: DateBadge2Props) => {
  return (
    <div className="inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs">
      {date}
    </div>
  );
};
