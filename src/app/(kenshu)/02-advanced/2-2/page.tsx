import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-2/mondai";
import { Answer } from "@/features/support/2-2/answer";

export default async function Advanced3() {
  return (
    <SectionWrapper
      title="Suspenseを使って並列処理を最適化しよう"
      description={`
＜問題＞
1.Suspenseを使い、エラーを解決する
2.直列から並列の非同期処理に修正する

＜目的＞
1.Suspenseを使って並列処理を最適化できるようになる
2.fallbackを設定できるようになる
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
