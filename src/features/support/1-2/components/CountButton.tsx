type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CountButton = ({ onClick, children }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
