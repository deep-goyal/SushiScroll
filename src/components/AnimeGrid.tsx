import { SimpleGrid, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import animeHook from "../hooks/useFetchAnime";
import AnimeCard from "./AnimeCard";

const theme = extendTheme({
  fonts: {
    heading: "'PT Serif', sans-serif",
    body: "'PT Serif', sans-serif",
  },
});

const AnimeGrid = () => {
  const animeArray = animeHook();
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400&display=swap');
        `}
      />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        spacing={10}
        padding={10}
      >
        {animeArray.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default AnimeGrid;
