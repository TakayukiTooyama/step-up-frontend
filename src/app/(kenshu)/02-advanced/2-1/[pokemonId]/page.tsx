import { getPokemon } from "@/actions/getPokemon";
import { getPokemonDetail } from "@/actions/getPokemonDetail";
import Image from "next/image";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    pokemonId: string;
  }>;
};

export default async function PokemonDetailPage({ params }: PageProps) {
  const { pokemonId } = await params;

  return (
    <Suspense>
      <PokemonDetail pokemonId={pokemonId} />
    </Suspense>
  );
}

const PokemonDetail = async ({ pokemonId }: { pokemonId: string }) => {
  const pokemon = await getPokemon(pokemonId);

  if (!pokemon) {
    return <div>ポケモンが見つかりません</div>;
  }

  return (
    <div className="border p-6 rounded-lg">
      <h1 className="text-2xl font-bold">{pokemon.name}</h1>
      <Image src={pokemon.imageUrl} alt={pokemon.name} width={100} height={100} />
      <p>{pokemon.description}</p>
    </div>
  );
};
