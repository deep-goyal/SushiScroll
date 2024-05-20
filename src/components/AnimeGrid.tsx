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
    heading: "'PT Serif', sans-serif",
    body: "'PT Serif', sans-serif",
  },
});

interface Props {
  selectedGenre: string;
}

const AnimeGrid = ({ selectedGenre }: Props) => {
  const { animeArray, loading, loadMore, hasNextPage } =
    animeHook(selectedGenre);
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
