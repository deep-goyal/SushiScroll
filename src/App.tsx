import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("Action");
  const [sortOrder, setSortOrder] = useState("POPULARITY_DESC");
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        backgroundColor={"#121212"}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchInput) => setSearchInput(searchInput)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} width={180}>
            <Sidebar
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex paddingLeft={10} marginBottom={2}>
            <SortSelector
              selectedOrder={sortOrder}
              onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
            />
          </Flex>
          <AnimeGrid
            selectedGenre={selectedGenre}
            sortOrder={sortOrder}
            searchInput={searchInput}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
