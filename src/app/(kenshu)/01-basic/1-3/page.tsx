import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-3/mondai";
import { Answer } from "@/features/support/1-3/answer";

export default function Basic3() {
  return (
    <SectionWrapper
      title="Props・フラグメント・テンプレートリテラルの理解を深めよう"
      description={`
＜問題＞
1.DateBadgeにPropsとして日付を渡せるようにする
2.2025/04/09と表示する
3.2025/05/09と表示する

＜目的＞
1.Propsの理解を深める
2.フラグメントを使ってみる
3.テンプレートリテラルを使ってみる
`}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
