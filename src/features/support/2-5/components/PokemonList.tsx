import { Pokemon } from "@/types";
import { PokemonListItem } from "./PokemonListItem";

type Props = {
  isPending: boolean;
  pokemonList: Pokemon[];
};

export const PokemonList: React.FC<Props> = ({ isPending, pokemonList }) => {
  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="flex flex-col items-center gap-4 w-full">
      {pokemonList.map((pokemon) => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};
