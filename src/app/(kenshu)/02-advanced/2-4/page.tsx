import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-4/mondai";
import { Answer } from "@/features/support/2-4/answer";

export default async function Advanced4() {
  return (
    <SectionWrapper
      title="サーバーアクションを理解しよう"
      description={`
＜問題＞
1.actionsディレクトリにサーバーアクションを作成
2.サーバーアクションでformDataからデータを取得し、LocalStorageに保存する
3.loading中はButtonをdisabledにしつつ、送信中...と表記する

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
