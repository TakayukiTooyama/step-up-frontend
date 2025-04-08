import { POKE_API_URL } from "@/constants";
import { PokemonApiResponse } from "@/types";
import { getPokemon } from "./getPokemon";

export async function getRandomPokemonList() {
  const pokemonListRes = await fetch(
    `${POKE_API_URL}/pokemon?offset=${Math.floor(Math.random() * 1000)}&limit=5`,
  );
  if (!pokemonListRes.ok) {
    throw new Error("ポケモンの取得に失敗しました");
  }
  const data = (await pokemonListRes.json()) as PokemonApiResponse;

  // 並列で各ポケモンの詳細を取得
  const pokemonDetails = await Promise.all(
    data.results.map((pokemon) => getPokemon(pokemon.name))
  );

  return pokemonDetails.filter((pokemon) => pokemon !== null);
}
