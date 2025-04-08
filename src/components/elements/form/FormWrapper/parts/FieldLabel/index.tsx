import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  name?: string;
  required?: boolean;
  subLabel?: React.ReactNode;
  className?: string;
};

export const FieldLabel = ({ name, label, required, className, subLabel }: Props) => {
  const labelStyle = "text-sm font-bold";
  return (
    <>
      {required || subLabel ? (
        <div className={cn("flex items-center w-full gap-0.5", className)}>
          <Label htmlFor={name} className={labelStyle}>
            {label}
          </Label>
          {subLabel && subLabel}
          {required && <span className="text-xs text-red-500 font-bold">※必須</span>}
        </div>
      ) : (
        <Label htmlFor={name} className={cn(labelStyle, className)}>
          {label}
        </Label>
      )}
    </>
  );
};
