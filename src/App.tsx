import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SortSelector from "./components/SortSelector";
import AnimeHeading from "./components/AnimeHeading";

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
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchInput) => setSearchInput(searchInput)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingLeft={5} width={180}>
            <Sidebar
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <AnimeHeading genre={selectedGenre} />
            <Flex paddingX={10} marginBottom={2}>
              <SortSelector
                selectedOrder={sortOrder}
                onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
              />
            </Flex>
          </HStack>

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
