import { SimpleGrid, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import animeHook from "../hooks/useFetchAnime";
import AnimeCard from "./AnimeCard";
import LoadingSkeleton from "./LoadingSkeleton";

const theme = extendTheme({
  fonts: {
    heading: "'PT Serif', sans-serif",
    body: "'PT Serif', sans-serif",
  },
});

const AnimeGrid = () => {
  const animeArray = animeHook();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
        {animeArray.loading &&
          skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}

        {animeArray.animeArray.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default AnimeGrid;
