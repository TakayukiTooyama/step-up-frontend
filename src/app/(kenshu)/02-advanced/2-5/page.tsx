import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-5/mondai";
import { Answer } from "@/features/support/2-5/answer";

export default async function Advanced5() {
  return (
    <SectionWrapper
      title="useActionStateを理解しよう"
      description={`
＜問題＞
1.既存のコードをuseActionStateで書き直す
2.Loading中は「Loading...」と早期リターンで表示させる
3.ポケモンが見つからない時は、早期リターンで「ポケモンが見つかりません」と表示する
4.ポケモン一覧を表示する

＜目的＞
1.useActionStateでコードが書けるようになる
2.早期リターンを理解する
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
