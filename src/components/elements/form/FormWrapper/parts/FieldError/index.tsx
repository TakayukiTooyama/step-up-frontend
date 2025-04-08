import { cn } from "@/lib/utils";

type Props = {
  errors?: string[];
};

export const FieldError = ({ errors }: Props) => {
  const listStyle = errors?.length === 1 ? "list-none" : "list-inside list-disc";
  return (
    <>
      {errors && (
        <ul className={cn("ml-2", listStyle)}>
          {errors.map((err) => (
            <li className="text-sm text-red-600" key={err}>
              {err}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
