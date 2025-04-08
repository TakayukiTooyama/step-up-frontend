import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-1/mondai";
import { Answer } from "@/features/support/2-1/answer";

export default async function Advanced1() {
  return (
    <SectionWrapper
      title="Dynamic Routeとページ遷移をを理解しよう"
      description={`
＜問題＞
1.src/app/(kenshu)/2-1 に dynamic route を用いて詳細ページを作成する
2.Linkコンポーネントを用いて詳細ページに遷移できるようにする
3.useRouterを用いて、詳細ページから一覧ページに戻れるようにする

＜目的＞
1.dynamic routeを理解する
2.Next.jsのLinkコンポーネントを使えるようになる
3.useRouterを使えるようになる
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
