"use server";

export const registerUserSkills = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const skills = formData.getAll("skills[]") as string[];

  console.info("名前: ", name);
  console.info("得意な技術", skills);

  if (!name || !skills) {
    return {
      success: false,
      message: "名前と得意な技術を入力してください",
    };
  }

  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    message: "作成成功!",
  };
};
