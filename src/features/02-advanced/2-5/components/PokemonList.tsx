import { Pokemon } from "@/types";
import { PokemonListItem } from "./PokemonListItem";

type Props = {
  pokemonList: Pokemon[];
};

export const PokemonList: React.FC<Props> = ({ pokemonList }) => {
  return (
    <ul className="flex flex-col items-center gap-4 w-full">
      {pokemonList.map((pokemon) => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};
