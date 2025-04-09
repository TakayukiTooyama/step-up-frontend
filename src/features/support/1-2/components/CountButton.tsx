type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CountButton = ({ onClick, children }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border px-2.5 py-0.5 text-xs hover:bg-gray-50"
    >
      {children}
    </button>
  );
};
