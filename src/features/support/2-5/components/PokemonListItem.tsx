import { Pokemon } from "@/types";
import Image from "next/image";

type PokemonListItemProps = {
  pokemon: Pokemon;
};

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon }) => {
  return (
    <li>
      <Image src={pokemon.imageUrl} alt={pokemon.name} width={80} height={80} />
      <p className="font-bold text-center">{pokemon.name}</p>
    </li>
  );
};
