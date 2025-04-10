import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-4/mondai";
import { Answer } from "@/features/support/2-4/answer";

export default async function Advanced4() {
  return (
    <SectionWrapper
      title="サーバーアクションを理解しよう"
      description={`
＜問題＞
1.formActionを完成させる
2.formを完成させる
3.actions/registerUserSkillsを編集し、console.logでformDataからの情報を表示させる
4.loading中はButtonをdisabledにしつつ、送信中...と表記する

＜補足＞
・成功した場合トーストを表示させています。今回の主旨ではないため実装済み。
・運営側のミスで、送信後「得意な技術」に値が残ってしまうので、申し訳ありませんが手動で削除お願いします。

＜目的＞
1.formのaction属性を使ってみる
2.サーバーアクションを理解しよう
3.formDataを理解しよう
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
