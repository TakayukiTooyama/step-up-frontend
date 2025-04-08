import { POKE_API_URL } from "@/constants";
import { PokemonApiDetailResponse } from "@/types";

export async function getPokemonDetail(pokemonId: string): Promise<PokemonApiDetailResponse> {
  const res = await fetch(`${POKE_API_URL}/pokemon/${pokemonId}`);

  if (!res.ok) {
    throw new Error("ポケモンの取得に失敗しました");
  }

  const data = await res.json();

  return data;
}
