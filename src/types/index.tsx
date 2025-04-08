/**
 * TODOアプリ関連
 */
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

/**
 * PokeAPIのポケモン一覧（/pokemon）
 * 必要なものだけを型定義しています
 */
export type PokemonApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonApiDetailResponse = {
  id: number;
  height: number;
  weight: number;
  species: {
    name: string;
  };
  sprites: {
    // biome-ignore lint/style/useNamingConvention: APIの命名規則に合わせるため
    front_default: string;
  };
};

/**
 * PokeAPIのポケモンの種族情報（/pokemon-species）
 * 必要なものだけを型定義しています
 */
export type PokemonSpecies = {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  // biome-ignore lint/style/useNamingConvention: APIの命名規則に合わせるため
  flavor_text_entries: {
    // biome-ignore lint/style/useNamingConvention: APIの命名規則に合わせるため
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonSpeciesApiResponse = {
  id: string;
  name?: string;
  description?: string;
};

export type Pokemon = {
  id: string;
  name: string;
  description: string;
  height: number;
  weight: number;
  imageUrl: string;
};
