export const registerUserSkills = async (formData: FormData) => {
  // console.info("名前: ", )
  // console.info("得意な技術", )

  // 1秒待機（サーバーアクションの処理時間を模している）
  await new Promise<void>((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "作成成功!",
  };
};
