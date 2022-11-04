// import "./App.css";
import { Filter } from "./components/Filter";
import { ThemeProvider } from "styled-components";
import { THEME_RAIOROS } from "./styles";



function App() {
  return (
    <ThemeProvider theme={THEME_RAIOROS}>
      <Filter />
    </ThemeProvider>
  );
}

export default App;
