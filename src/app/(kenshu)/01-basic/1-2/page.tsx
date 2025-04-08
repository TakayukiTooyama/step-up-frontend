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

＜目的＞
・コンポーネントの作成し、共通化ができるようになる
・childrenをPropsとして受け取れることを理解する
・named exportの理解する
      `}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
