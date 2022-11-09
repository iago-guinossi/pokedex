import styled from "styled-components";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const Img = styled.img`
    height:70px;
    width:70px;
    margin: 10px;
`
const EvoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`


// const id = 133
const id = 2

const pokemon = await getPokemon(id)

const evolution = await getEvolutionChain(pokemon)

async function getPokemon(pokeNumber: any) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}`)
    const data = await response.json()
    
    return data
}

async function getPokedex() {
    const response = await fetch('https://pokeapi.co/api/v2/pokedex/1/')
    const data = await response.json()
    
    return data
  }

async function getEvolutionChain(pokemon) {
    const response = await fetch(pokemon.evolution_chain.url)
    const data = await response.json()
    return data
}

const pokedex = await getPokedex()

// console.log(pokemon)
// console.log(evolution)

function renderEvo(evoList){
    const sprite = pokedex.pokemon_entries.find(poke => poke.pokemon_species.name === evoList.species.name)
        return (
            <>
             <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${sprite.entry_number}.svg`} alt={sprite.pokemon_species.name}/>
             {evoList.evolves_to.length > 0 ? evoList.evolves_to.map(evo => renderEvo(evo)): null }
             </>
              )  
}
export function PokemonEvo(){
    return(
        evolution.chain.evolves_to.length > 0 ? 
        <>
        <Title>Evolution</Title>
        <EvoContainer>
        {renderEvo(evolution.chain)}
        </EvoContainer>
        {/* <Title>Evolution</Title>
        <EvoContainer>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        <Tag color='lightgray'>Lv 16</Tag>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        <Tag color='lightgray'>Lv 36</Tag>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        </EvoContainer> */}
        </> : <></>
    )
}