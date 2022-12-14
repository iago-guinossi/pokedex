// import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import { List } from "./components/Card";
import { Filter } from "./components/Filter";
import { PokeInfo } from "./components/PokeInfo";
import { PokemonListProvider } from "./components/Provider/ListPokemonProvider";
import { PokemonDetailsProvider } from "./components/Provider/PokemonDetails/PokemonDetails";
import { useView, ViewProvider } from "./components/Provider/ViewProvider";
import { useWindowSize } from "./hooks/useWindowSize";

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

const ContainerMediaQuery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.a`
  font-family: "Barlow", sans-serif;
  position: absolute;
  right: 0;
  top: 0;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const queryClient = new QueryClient();

function App() {
  const { view } = useView();
  const size = useWindowSize();
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonDetailsProvider>
        <PokemonListProvider>
          <ViewProvider>
            {size.width < 821 ? (
              <ThemeProvider theme={THEME_RAIOROS}>
                <ContainerMediaQuery>
                  <Filter />
                  <List />
                  <PokeInfo />
                </ContainerMediaQuery>
              </ThemeProvider>
            ) : (
              <Container>
                <ThemeProvider theme={THEME_RAIOROS}>
                  <SubContainer>
                    <Filter />
                    <List />
                  </SubContainer>
                  <PokeInfo />
                </ThemeProvider>
              </Container>
            )}
            <Footer
              href="https://github.com/iago-guinossi/pokedex"
              className="textoBase"
            >
              Desenvolvido por Iago Guinossi 2022.
            </Footer>
          </ViewProvider>
        </PokemonListProvider>
      </PokemonDetailsProvider>
    </QueryClientProvider>
  );
}

export default App;
