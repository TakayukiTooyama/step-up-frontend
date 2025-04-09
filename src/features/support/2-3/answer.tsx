import { getRandomPokemonList } from "@/actions/getRandomPokemonList";
import Link from "next/link";
import { Suspense } from "react";

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

  if (pokemons.length === 0) {
    return <div>ポケモンが見つかりません</div>;
  }

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link href={`/02-advanced/2-3/${pokemon.id}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
};
