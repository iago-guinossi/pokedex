// import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import { List } from "./components/Card";
import { Filter } from "./components/Filter";
import { PokeInfo } from "./components/PokeInfo";
import { PokemonListProvider } from "./components/Provider/ListPokemonProvider";
import { PokemonDetailsProvider } from "./components/Provider/PokemonDetails/PokemonDetails";
import { THEME_RAIOROS } from "./styles";

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
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonDetailsProvider>
        <PokemonListProvider>
          <Container>
            <ThemeProvider theme={THEME_RAIOROS}>
              <SubContainer>
                <Filter />
                <List />
              </SubContainer>
              <PokeInfo />
            </ThemeProvider>
          </Container>
        </PokemonListProvider>
      </PokemonDetailsProvider>
    </QueryClientProvider>
  );
}

export default App;
