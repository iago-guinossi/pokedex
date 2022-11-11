import React from "react";
import styled from "styled-components";
import { PokemonType } from "../uiComponents/PokemonType";
import { NumberPokemon } from "../uiComponents/NumberPokemon";
import { NamePokemon } from "../uiComponents/NamePokemon";
import { CardInfo } from "../uiComponents/CardInfo";
import { useQuery } from "react-query";
import axios from "axios";
import { usePokemonDetails } from "../Provider/ChosePokemonProvider/PokemonDetails";

const CardExt = styled.div`
  background-color: black;
  height: 260px;
  width: 300px;
  margin: 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
`;

const PokeImg = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 0;
  left: 100px;
`;

const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1700px;
`;

const CardInt = styled(CardInfo)`
  padding: 70px 0 30px 0;
`

const getPokemons = async (key, limit) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
  return data
}

const getPokemon = async (id) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  return data
}
const id = 2
const pokemon = await getPokemon(id);

// export function Card() {
//   const { data, status } = useQuery(["pokemons", 22], getPokemons);
//   const PokemonCard = (pokemons) => {
//     console.log(pokemons)
//     return pokemons.results.map((pokemon)=> {
//       const poke = getPokemon
//       return(
//       <CardExt>
//         <PokeImg
//           src={poke.sprites.other.dream_world.front_default}
//           alt={poke.species.name}
//         />
//         <CardInfo>
//           <NumberPokemon>N°</NumberPokemon>
//           <NamePokemon size="medium">{poke.species.name}</NamePokemon>
//           <PokeTypeContainer>
//             {poke.types.map((type: any, i: number) => {
//               return <PokemonType key={i} type={type.type.name} />;
//             })}
//           </PokeTypeContainer>
//         </CardInfo>
//       </CardExt>
//       )
//     })
//   };
//   return (
//     <Container>
//       {status === "loading" && <div>Loading...</div>}
//       {status === "error" && <div>Error fetching pokemons</div>}
//       {status === "success" && <div>{PokemonCard(data)}</div>}
//     </Container>
//   );
// }

function List() {
  const pokeDetails = usePokemonDetails();

  const handleClick = (id: string | number) => {
    pokeDetails?.setPokemon(id);
  };

  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div onClick={() => handleClick(i)}>poke{i}</div>
      ))}
    </>
  );
}


export function Card() {
  const pokeDetails = usePokemonDetails();

  const handleClick = (id: string | number) => {
    pokeDetails?.setPokemon(id);
  };
  return (
    <Container>
      <CardExt>
        <PokeImg
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.species.name}
        />
        <CardInt>
          <NumberPokemon>N°{id}</NumberPokemon>
          <NamePokemon size="medium">{pokemon.species.name}</NamePokemon>
          <PokeTypeContainer>
            {pokemon.types.map((type: any, i: number) => {
              return <PokemonType key={i} type={type.type.name} />;
            })}
          </PokeTypeContainer>
        </CardInt>
        <button onClick={() => handleClick(1)}>001</button>
        <button onClick={() => handleClick(2)}>002</button>
        <button onClick={() => handleClick(3)}>003</button>
        <button onClick={() => handleClick(4)}>004</button>
      </CardExt>
    </Container>
  );
}