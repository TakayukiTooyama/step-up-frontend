import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-1/mondai";
import { Answer } from "@/features/support/2-1/answer";

export default async function Advanced2() {
  return (
    <SectionWrapper
      title="直列から並列の非同期処理を修正できるようになろう"
      description={`
＜問題＞
1.Suspenseを使い、エラーを解決する
2.直列から並列の非同期処理に修正する

＜目的＞
1.Suspenseを使ってみる
2.直列と並列の理解を深める
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
