import React, { createContext, useContext, useEffect, useState } from "react";
import { pokemonApi } from "../../../Api";
import { GetPokemonResponse } from "../../../domain/pokemon";

type ContextType = {
  pokeList?: (GetPokemonResponse | null)[];
  isLoading: boolean;
  nextPage: () => void;
  prevPage: () => void;
  page: {size: number, offset: number};
};

const PokemonListContext = createContext<ContextType>({
  pokeList: [],
  isLoading: false,
  nextPage() {},
  prevPage() {},
  page: { size: 20, offset: 0 }
});

type PokemonListProviderProps = {
  children: React.ReactNode;
};

type Page = {
  size: number;
  offset: number;
};

export function PokemonListProvider({ children }: PokemonListProviderProps) {
  const [page, setPage] = useState<Page>({ size: 20, offset: 0 });
  const [pokeList, setPokeList] = useState<(GetPokemonResponse | null)[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const nextPage = async () => {
    setIsLoading(true);

    const list = Array.from({ length: page.size }, (_, idx) => {
      const id = idx + 1 + page.offset;
      return id > 898 ? null : pokemonApi.fetchPokemonByNumber(id);
    }); 
    const data = await Promise.all(list);
    
    setPage(({ offset, size }) => {
      const result = { size, offset: offset + size };
      
      return result;
    });
    setPokeList(data);
    setIsLoading(false);
  };
  
  const prevPage = async () => {
    setIsLoading(true);
    setPage(({ offset, size }) => {
      const result = { size, offset: offset - size };

      return result;})
    const list = Array.from({ length: page.size }, (_, idx) => {
      const id = idx + 1 + page.offset - 2*page.size;
      return pokemonApi.fetchPokemonByNumber(id);
    }); 
    const data = await Promise.all(list);

    setPokeList(data);
    setIsLoading(false);
  };
  return (
    <PokemonListContext.Provider value={{ pokeList, isLoading, nextPage, prevPage, page }}>
      {children}
    </PokemonListContext.Provider>
  );
}

export const usePokemonList = () => useContext(PokemonListContext);
