type Props = {
  title: string;
  description: string;
  answer: React.ReactNode;
  children: React.ReactNode;
};

const sectionTitleStyle = "text-md font-bold mb-1 -ml-2";
const contentWrapperStyle =
  "border border-border rounded-md p-4 flex flex-col justify-center items-center";

export const SectionWrapper: React.FC<Props> = ({ children, title, description, answer }) => {
  return (
    <div className="w-full p-6 max-w-2xl mx-auto ">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitleStyle}>【問題】</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div>
          <h2 className={sectionTitleStyle}>【完成形】</h2>
          <div className={contentWrapperStyle}>{answer}</div>
        </div>
        <div>
          <h2 className={sectionTitleStyle}>【解答】</h2>
          <div className={contentWrapperStyle}>{children}</div>
        </div>
      </div>
    </div>
  );
};
