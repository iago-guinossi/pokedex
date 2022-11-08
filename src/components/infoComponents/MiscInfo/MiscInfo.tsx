import styled from "styled-components"
import { PokemonHeight } from "../PokemonHeight"
import { PokemonWeight } from "../PokemonWeight"
import { PokemonXp } from "../PokemonXp"
import { Weaknesses } from "../Weaknesses"

const MiscGrid = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
`

export function MiscInfo(){
    return(
        <MiscGrid>
            <PokemonHeight/>
            <PokemonWeight/>
            <Weaknesses/>
            <PokemonXp/>
        </MiscGrid>
    )
}