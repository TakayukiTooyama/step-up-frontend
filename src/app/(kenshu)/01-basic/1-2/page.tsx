import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-2/mondai";
import { Answer } from "@/features/support/1-2/answer";

export default function Basic2() {
  return (
    <SectionWrapper
      title="コンポーネント・Props・exportを理解しよう"
      description={`
＜問題＞
1.features/01-basic/1-2/componentsに CountButtonコンポーネントを作成
2.PropsとしてchildrenとonClickを受け取れるようにする
3.exportし、下記のJSXを書き換える
4.CountButtonの見た目を調整しよう。コピペでOK。
  （className="rounded-lg border px-2.5 py-0.5 text-xs hover:bg-gray-50"）

＜目的＞
1.コンポーネントの作成し、共通のUIを作成できるようになる
2.childrenをPropsとして受け取れることを理解する
3.named exportの理解を深める
      `}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
