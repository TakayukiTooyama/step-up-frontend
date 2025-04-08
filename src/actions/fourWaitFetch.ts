export async function fourWaitFetch() {
  // 4秒待機
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return "４秒が経ちました！";
}
