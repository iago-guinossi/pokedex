// import "./App.css";
import { Filter } from "./components/Filter";
import { ThemeProvider } from "styled-components";
import { THEME_RAIOROS } from "./styles";
import { Card } from "./components/Card";
import { PokeInfo} from "./components/PokeInfo"

function App() {
  return (
    <ThemeProvider theme={THEME_RAIOROS}>
      <Filter />
      <Card />
      <PokeInfo/>
    </ThemeProvider>
  );
}

export default App;
