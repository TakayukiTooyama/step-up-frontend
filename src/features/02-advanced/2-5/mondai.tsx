"use client";

import { getRandomPokemonList } from "@/actions/getRandomPokemonList";
import { Button } from "@/components/ui/button";
import { Pokemon } from "@/types";
import { useState } from "react";
import { PokemonList } from "./components/PokemonList";

/**
 * ＜問題＞
 * 1.既存のコードをuseActionStateで書き直す
 * 2.Loading中は「Loading...」と早期リターンで表示させる
 * 3.ポケモン一覧を表示する
 * 4.useActionStateでコードを書き換える
 *
 * ＜目的＞
 * 1.useActionStateでコードが書けるようになる
 * 2.早期リターンを理解する
 */
export const Mondai = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const handleClick = async () => {
    setPokemonList([]);
    const pokemonList = await getRandomPokemonList();
    setPokemonList(pokemonList);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button type="submit" onClick={handleClick}>
        ポケモンを取得する
      </Button>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
};
