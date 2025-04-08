export async function twoWaitFetch() {
  // 2秒待機
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "2秒が経ちました！";
}
