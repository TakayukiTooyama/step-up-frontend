import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-1/mondai";
import { Answer } from "@/features/support/1-1/answer";

export default function Section1_1() {
  return (
    <SectionWrapper
      title="useStateとJSXの理解を深めよう"
      description={`
＜問題＞
1.カウントが-1されるボタンの追加
2.カウントがリセットされるボタンの追加

＜目的＞
1.useStateの理解を深める
2.JSXの理解を深める
`}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
