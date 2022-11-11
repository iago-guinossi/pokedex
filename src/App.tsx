// import "./App.css";
import { Filter } from "./components/Filter";
import styled, { ThemeProvider } from "styled-components";
import { THEME_RAIOROS } from "./styles";
import { Card } from "./components/Card";
import { PokeInfo } from "./components/PokeInfo";
import { CardContainer } from "./components/CardContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChosePokemonProvider } from "./components/Provider/ChosePokemonProvider";
import { PokemonDetailsProvider, usePokemonDetails } from "./components/Provider/ChosePokemonProvider/PokemonDetails";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 60px;
`;
const SubContainer = styled.div`
  display: block;
`;
const queryClient = new QueryClient();

function App() {
  const pokemon = usePokemonDetails()
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonDetailsProvider>
      <ChosePokemonProvider>
        <Container>
          <ThemeProvider theme={THEME_RAIOROS}>
            <SubContainer>
              <Filter />
              <Card />
            </SubContainer>
            {pokemon?.pokemonInfo === null ? null : (pokemon?.status === 'loading' ? <div>Loading</div> : <PokeInfo/>) }
          </ThemeProvider>
        </Container>
      </ChosePokemonProvider>
      </PokemonDetailsProvider>
    </QueryClientProvider>
  );
}

export default App;
