"use client";

export const Answer = () => {
  const today = new Date();
  return (
    <div className="flex gap-1">
      <DateBadge1
        date={{ year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() }}
      />
      <DateBadge2 date={`${today.getFullYear()}/${today.getMonth() + 2}/${today.getDate()}`} />
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
  date: string;
};
const DateBadge2 = ({ date }: DateBadge2Props) => {
  return (
    <div className="inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs">{date}</div>
  );
};
