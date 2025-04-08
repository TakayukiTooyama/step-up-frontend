"use server";

export const registerUserSkills = async (formData: FormData) => {
  const name = formData.get("name");
  const skills = formData.getAll("skills[]");

  console.info("名前: ", name);
  console.info("得意な技術", skills);

  if (!name || !skills) {
    return {
      success: false,
      message: "名前と得意な技術を入力してください",
    };
  }

  await new Promise<void>((resolve) => setTimeout(resolve, 2000))

  return {
    success: true,
    message: "作成成功!",
  };
};
