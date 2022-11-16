import React, { createContext, useContext, useEffect, useState } from "react";
import { pokemonApi } from "../../../Api";
import { GetPokemonResponse } from "../../../domain/pokemon";

type ContextType = {
  pokeList?: GetPokemonResponse[];
  isLoading: boolean;
  nextPage: () => void;
};

const PokemonListContext = createContext<ContextType>({
  pokeList: [],
  isLoading: false,
  nextPage() {},
});

type PokemonListProviderProps = {
  children: React.ReactNode;
};

type Page = {
  size: number;
  offset: number;
};

export function PokemonListProvider({ children }: PokemonListProviderProps) {
  const [page, setPage] = useState<Page>({ size: 6, offset: 0 });
  const [pokeList, setPokeList] = useState<GetPokemonResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const nextPage = async () => {
    setIsLoading(true);

    const list = Array.from({ length: page.size }, (_, idx) => {
      const id = idx + 1 + page.offset;
      return pokemonApi.fetchPokemonByNumber(id);
    }); 
    const data = await Promise.all(list);

    setPage(({ offset, size }) => {
      const result = { size, offset: offset + size };

      return result;
    });
    setPokeList(data);
    setIsLoading(false);
  };

  return (
    <PokemonListContext.Provider value={{ pokeList, isLoading, nextPage }}>
      {children}
    </PokemonListContext.Provider>
  );
}

export const usePokemonList = () => useContext(PokemonListContext);