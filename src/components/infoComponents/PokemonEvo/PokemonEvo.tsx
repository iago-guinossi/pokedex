import styled from "styled-components";
import { NamePokemon } from "../../NamePokemon";
import { Tag } from "../../uiComponents/Tag";

const Img = styled.img`
    height:90px;
    width:90px;
`
const EvoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export function PokemonEvo(){
    return(
        <>
        <NamePokemon>EVOLUTIUON</NamePokemon>
        <EvoContainer>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        <Tag color='lightgray'>Lv 16</Tag>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        <Tag color='lightgray'>Lv 36</Tag>
        <Img src="/src/assets/ivysaur.svg" alt="Ivysaur"/>
        </EvoContainer>
        </>
    )
}