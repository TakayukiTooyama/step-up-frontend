import { Field } from "./parts/Field";
import { FieldError } from "./parts/FieldError";
import { FieldLabel } from "./parts/FieldLabel";

type FormWrapperProps = {
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
  subLabel?: React.ReactNode;
  labelClassName?: string;
  errors?: string[];
  children: React.ReactNode;
};

export const FormWrapper = ({
  className,
  label,
  name,
  required = false,
  subLabel,
  labelClassName,
  errors,
  children,
}: FormWrapperProps) => {
  return (
    <>
      {!label && !errors ? (
        <>{children}</>
      ) : (
        <Field className={className}>
          {label && (
            <FieldLabel
              label={label}
              name={name}
              required={required}
              subLabel={subLabel}
              className={labelClassName}
            />
          )}
          {children}
          <FieldError errors={errors} />
        </Field>
      )}
    </>
  );
};
