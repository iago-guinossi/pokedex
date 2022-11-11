import axios from "axios";

export const pokemonApi = {
  async fetchPokemonByName(name: string) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    return data;
  },
  async fetchPokemonByNumber(number: number) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    return data;
  },
  async fetchPokemonSpecies(object: object){
    const { data } = await axios.get(object.species.url)
    return data;
  },
  async fetchPokedex(){
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokedex/1/')
    return data;
  },
  async fetchEvolutionChain(object: object){
    const {data} = await axios.get(object.evolution_chain.url)
    return data;
  }
};
