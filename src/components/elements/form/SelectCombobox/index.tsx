import { MultipleSelector, MultipleSelectorProps } from "@/components/ui/multi-select";
import { cn } from "@/lib/utils";
import { FormWrapper } from "../FormWrapper";

type Props = {
  label?: string;
  name?: string;
  required?: boolean;
  errors?: string[];
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  subLabel?: React.ReactNode;
  selectMode?: "single" | "multi";
} & Omit<MultipleSelectorProps, "className">;

const selectModeOptions: Record<"single" | "multi", MultipleSelectorProps> = {
  single: {
    hideClearAllButton: true,
    maxSelected: 1,
  },
  multi: {
    hidePlaceholderWhenSelected: true,
  },
};

export const SelectCombobox = ({
  selectMode = "multi",
  label,
  name,
  required,
  errors,
  className,
  fieldClassName,
  labelClassName,
  subLabel,
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
      subLabel={subLabel}
    >
      <MultipleSelector
        {...selectModeOptions[selectMode]}
        {...props}
        name={name}
        emptyIndicator={
          <p className="text-center text-xs text-gray-600">選択できる項目がありません。</p>
        }
        className={cn("bg-white", className)}
        badgeClassName="h-6 bg-[#EBEBEB]"
      />
    </FormWrapper>
  );
};
