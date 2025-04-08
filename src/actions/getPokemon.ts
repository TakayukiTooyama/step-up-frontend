"use server";

import { Pokemon } from "@/types";
import { getPokemonSpecies } from "./getPokemonSpecies";
import { getPokemonDetail } from "./getPokemonDetail";

export async function getPokemon(pokemonId: string): Promise<Pokemon | null> {
  const [species, pokemon] = await Promise.all([
    getPokemonSpecies(pokemonId),
    getPokemonDetail(pokemonId),
  ]);

  if (!species.name || !species.description) {
    return null;
  }

  return {
    id: pokemon.id.toString(),
    name: species.name,
    description: species.description,
    height: pokemon.height,
    weight: pokemon.weight,
    imageUrl: pokemon.sprites.front_default,
  };
}
