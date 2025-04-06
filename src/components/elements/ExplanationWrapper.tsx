type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const contentWrapperStyle =
  "border border-border rounded-md p-4 flex flex-col justify-center items-center";

export const ExplanationWrapper: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className="w-full p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-muted-foreground mb-4 whitespace-pre-wrap">{description}</p>
      <div className={contentWrapperStyle}>{children}</div>
    </div>
  );
};
