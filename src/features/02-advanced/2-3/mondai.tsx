/**
 * ＜問題＞
 * 1.「Suspense」「PokemonList」「非同期関数getRandomPokemonList」を使用し、ポケモン名の一覧を表示させる
 * 2.早期リターンを用いて、ポケモンが見つからない場合は、「ポケモンが見つかりません」と表示させる
 * 3.src/app/(kenshu)/02-advanced/2-3 に dynamic route を用いて詳細ページを作成する（ディレクトリ名はpokemonId）
 * 4.console.infoを用いて、詳細ページのpokemonIdを出力する
 * 5.Linkコンポーネントを用いて詳細ページに遷移できるようにする
 * 6.詳細ページに一覧に戻るボタンを追加する
 *
 * ＜目的＞
 * 1.Suspenseを使えるようになる
 * 2.dynamic routeを理解する
 * 3.Next.jsのLinkコンポーネントを使えるようになる
 */
export const Mondai = async () => {
  return (
    <div>
      <h2 className="font-bold">ポケモン一覧</h2>
      {/* <PokemonList /> */}
    </div>
  );
};

const PokemonList: React.FC = () => {
  return (
    <ul>
      <li />
    </ul>
  );
};

/**
 * 詳細ページを作成し、以下のコードを貼り付けてください。
 */
// import { getPokemon } from "@/actions/getPokemon";
// import Image from "next/image";
// import { Suspense } from "react";

// type PageProps = {
//   params: Promise<{
//     pokemonId: string;
//   }>;
// };

// export default async function PokemonDetailPage({ params }: PageProps) {
//   const { pokemonId } = await params;

//   return (
//     <Suspense>
//       <PokemonDetail pokemonId={pokemonId} />
//     </Suspense>
//   );
// }

// const PokemonDetail = async ({ pokemonId }: { pokemonId: string }) => {
//   const pokemon = await getPokemon(pokemonId);

//   return (
//     <div className="border p-6 rounded-lg">
//       <h1 className="text-2xl font-bold">{pokemon.name}</h1>
//       <Image src={pokemon.imageUrl} alt={pokemon.name} width={100} height={100} />
//       <p>{pokemon.description}</p>
//     </div>
//   );
// };
