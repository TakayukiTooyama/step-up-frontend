import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormWrapper } from "../FormWrapper";

type Props = {
  name?: string;
  label?: string;
  required?: boolean;
  errors?: string[];
  className?: string;
  labelClassName?: string;
  fieldClassName?: string;
} & Omit<React.ComponentProps<"input">, "required" | "name" | "className">;

export const Input = ({
  name,
  label,
  required,
  errors,
  className,
  labelClassName,
  fieldClassName,
  ...props
}: Props) => {
  return (
    <FormWrapper
      className={fieldClassName}
      label={label}
      name={name}
      required={required}
      labelClassName={labelClassName}
      errors={errors}
    >
      <ShadcnInput
        id={name}
        name={name}
        required={required}
        className={cn(
          "hover:outline-none hover:outline-0 transition-none bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0",
          className,
        )}
        {...props}
      />
    </FormWrapper>
  );
};
