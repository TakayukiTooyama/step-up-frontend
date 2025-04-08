"use client";

import { Input } from "@/components/elements/form/Input";
import { SelectCombobox } from "@/components/elements/form/SelectCombobox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { registerUserSkills } from "./actions/registerUserSkills";
import { USER_SKILLS } from "@/constants";

/**
 * ＜問題＞
 * 1.actions/registerUserSkillsを編集し、console.logでformDataからの情報を表示させる
 * 2.loading中はButtonをdisabledにしつつ、送信中...と表記する
 *
 * ＜補足＞
 * 成功した場合トーストを表示させています。今回の主旨ではないため実装済み。
 *
 * ＜参考＞
 * https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 *
 * ＜目的＞
 * 1.formのaction属性を使ってみる
 * 2.サーバーアクションを理解しよう
 * 3.formDataを理解しよう
 */
export const Mondai = () => {
  const formAction = async (formData: FormData) => {
    const res = await registerUserSkills(formData);
    if (!res.success) {
      toast.error(res.message);
    }
    toast.success(res.message);
  };

  return (
    <form className="flex flex-col gap-4 w-full">
      <Input name="" label="名前" />
      <SelectCombobox name="" label="得意な技術" options={USER_SKILLS} />
      <Button type="submit">送信</Button>
    </form>
  );
};
