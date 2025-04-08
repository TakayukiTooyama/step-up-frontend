"use client";

export const Answer = () => {
  return (
    <>
      <DateBadge date={new Date(2025, 4, 9)} />
      <DateBadge date={new Date(2025, 5, 9)} />
    </>
  );
};

/**
 * 日付を表示するバッジのコンポーネント
 */
type DateBadgeProps = {
  date: Date;
};
const DateBadge: React.FC<DateBadgeProps> = ({ date }) => {
  return (
    <div className="inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs">
      {date.toLocaleDateString()}
    </div>
  );
};
