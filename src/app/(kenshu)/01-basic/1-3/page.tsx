import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-3/mondai";
import { Answer } from "@/features/support/1-3/answer";

export default function Basic3() {
  return (
    <SectionWrapper
      title="Props・テンプレートリテラルの理解を深めよう"
      description={`
＜問題＞
1.todayとDateBadge1を使い、今日の日付が表示されたバッジを作成する
2.todayとDateBadge2を使い、2025/05/09と表示されたバッジを作成する

＜条件＞
型を変えずに渡すPropsを変えましょう

＜目的＞
1.Propsの理解を深める
2.テンプレートリテラルを使ってみる
`}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
