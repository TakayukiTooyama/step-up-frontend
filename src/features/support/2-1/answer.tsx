import { getRandomPokemonList } from "@/actions/getRandomPokemonList";
import Link from "next/link";
import { Suspense } from "react";

/**
 * ＜問題＞
 * 1.src/app/(kenshu)/2-1 に dynamic route を用いて詳細ページを作成する
 * 2.Linkコンポーネントを用いて詳細ページに遷移できるようにする
 * 3.useRouterを用いて、詳細ページから一覧ページに戻れるようにする
 *
 * ＜参考＞
 * https://nextjs.org/docs/pages/api-reference/functions/use-router
 *
 * ＜目的＞
 * 1.dynamic routeを理解する
 * 2.Next.jsのLinkコンポーネントを使えるようになる
 * 3.useRouterを使えるようになる
 */
export const Answer = async () => {
  return (
    <div>
      <h2 className="font-bold">ポケモン一覧</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
};

const PokemonList = async () => {
  const pokemons = await getRandomPokemonList();
  console.log("🚀 ~ PokemonList ~ pokemons:", pokemons);

  if (pokemons.length === 0) {
    return <div>ポケモンが見つかりません</div>;
  }

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link href={`/02-advanced/2-1/${pokemon.id}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
};

/**
 * 詳細ページに貼り付けてください（事前に作成した詳細ページのUI）。
 */
// export default function PokemonDetailPage() {
//   return (

//   )
// }
