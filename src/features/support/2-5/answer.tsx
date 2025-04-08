"use client";

import { getRandomPokemonList } from "@/actions/getRandomPokemonList";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { PokemonList } from "./components/PokemonList";

export const Answer = () => {
  const [pokemonList, action, isPending] = useActionState(getRandomPokemonList, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <form action={action}>
        <Button type="submit" disabled={isPending}>
          ポケモンを取得する
        </Button>
      </form>
      <PokemonList isPending={isPending} pokemonList={pokemonList} />
    </div>
  );
};
