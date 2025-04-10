import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/02-advanced/2-3/mondai";
import { Answer } from "@/features/support/2-3/answer";

export default async function Advanced1() {
  return (
    <SectionWrapper
      title="Dynamic Routeとページ遷移をを理解しよう"
      description={`
＜問題＞
1.「Suspense」「PokemonList」「非同期関数getRandomPokemonList」を使用し、ポケモン名の一覧を表示させる
2.早期リターンを用いて、ポケモンが見つからない場合は、「ポケモンが見つかりません」と表示させる
3.src/app/(kenshu)/02-advanced/2-3 に dynamic route を用いて詳細ページを作成する（ディレクトリ名はpokemonId）
4.console.infoを用いて、詳細ページのpokemonIdを出力する
5.Linkコンポーネントを用いて詳細ページに遷移できるようにする
6.詳細ページに一覧に戻るボタンを追加する

＜目的＞
1.Suspenseを使えるようになる
2.dynamic routeを理解する
3.Next.jsのLinkコンポーネントを使えるようになる
`}
      answer={<Answer />}
      direction="row"
    >
      <Mondai />
    </SectionWrapper>
  );
}
