"use client";

import { Input } from "@/components/elements/form/Input";
import { SelectCombobox } from "@/components/elements/form/SelectCombobox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { registerUserSkills } from "./actions/registerUserSkills";
import { useActionState } from "react";
import { USER_SKILLS } from "@/constants";

type ActionState = {
  success: boolean;
  message: string;
};

const initialState: ActionState = {
  success: false,
  message: "",
};

export const Answer = () => {
  const [_, formAction, isPending] = useActionState(
    async (_prevState: ActionState, formData: FormData) => {
      const res = await registerUserSkills(formData);
      res.success ? toast.success(res.message) : toast.error(res.message);
      return res;
    },
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full">
      <Input name="name" label="名前" />
      <SelectCombobox name="skills[]" label="得意な技術" options={USER_SKILLS} />
      <Button type="submit" disabled={isPending}>
        {isPending ? "送信中..." : "送信"}
      </Button>
    </form>
  );
};
