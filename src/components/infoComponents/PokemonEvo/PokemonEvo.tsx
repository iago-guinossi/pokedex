import styled from "styled-components";
import { Tag } from "../../uiComponents/Tag";
import { Title } from "../../uiComponents/Title";

const Img = styled.img`
    height:70px;
    width:70px;
`
const EvoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 10px;
`

export function PokemonEvo(){
    return(
        <>
        <Title>Evolution</Title>
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