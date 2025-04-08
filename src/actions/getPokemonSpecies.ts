import { POKE_API_URL } from "@/constants";
import { PokemonSpecies, PokemonSpeciesApiResponse } from "@/types";

export async function getPokemonSpecies(id: string): Promise<PokemonSpeciesApiResponse> {
  const response = await fetch(`${POKE_API_URL}/pokemon-species/${id}`);

  if (!response.ok) {
    return {
      id,
    };
  }

  const data = (await response.json()) as PokemonSpecies;

  // 日本語名を取得
  const japaneseName =
    data.names.find((name) => name.language.name === "ja")?.name || "日本語名が見つかりません。";

  // 日本語の説明文を取得
  const japaneseDescription =
    data.flavor_text_entries
      .find((entry) => entry.language.name === "ja")
      ?.flavor_text.replace(/\s+/g, "") || "説明文が見つかりません。";

  return {
    id: data.id.toString(),
    name: japaneseName,
    description: japaneseDescription,
  };
}
