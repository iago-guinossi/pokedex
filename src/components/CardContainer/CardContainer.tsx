import styled from "styled-components"
import { Card } from "../Card/Card"

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 1700px;
`

export function CardContainer(){
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    )
}