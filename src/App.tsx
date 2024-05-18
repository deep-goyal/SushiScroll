import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Sidebar />
          </GridItem>
        </Show>
        <GridItem area="main">
          <AnimeGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
