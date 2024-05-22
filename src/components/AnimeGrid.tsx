import {
  SimpleGrid,
  extendTheme,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import animeHook from "../hooks/useFetchAnime";
import AnimeCard from "./AnimeCard";
import LoadingSkeleton from "./LoadingSkeleton";

const theme = extendTheme({
  fonts: {
    heading: "'Inter Tight', sans-serif",
    body: "'Inter Tight', sans-serif",
  },
});

interface Props {
  selectedGenre: string;
  sortOrder: string;
}

const AnimeGrid = ({ selectedGenre, sortOrder }: Props) => {
  const { animeArray, loading, loadMore, hasNextPage } = animeHook({
    selectedGenre,
    sortOrder,
  });
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital@0;1&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        `}
      />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        spacing={10}
        padding={10}
      >
        {loading &&
          skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
        {animeArray.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={loadMore} isLoading={loading} padding={3}>
          Load More
        </Button>
      )}
    </ChakraProvider>
  );
};

export default AnimeGrid;
