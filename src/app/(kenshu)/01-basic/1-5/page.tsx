import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-5/mondai";
import { Answer } from "@/features/support/1-5/answer";

export default function Basic5() {
  return (
    <SectionWrapper
      title="カスタムフックを作れるようになろう！"
      description={`
＜問題＞
1-4で作成したTODOアプリの処理の部分をカスタムフックに切り分けてください。

＜目的＞
1.カスタムフックを作れるようになる
`}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
