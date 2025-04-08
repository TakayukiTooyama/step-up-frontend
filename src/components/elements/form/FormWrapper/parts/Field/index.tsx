import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Field = ({ className, children }: Props) => {
  return <div className={cn("flex w-full flex-col gap-1", className)}>{children}</div>;
};
