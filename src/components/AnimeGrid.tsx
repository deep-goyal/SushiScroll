import { SimpleGrid, Button, Flex, Text } from "@chakra-ui/react";
import animeHook from "../hooks/useFetchAnime";
import AnimeCard from "./AnimeCard";
import LoadingSkeleton from "./LoadingSkeleton";

interface Props {
  selectedGenre: string;
  sortOrder: string;
  searchInput: string;
}

const AnimeGrid = ({ selectedGenre, sortOrder, searchInput }: Props) => {
  const { animeArray, loading, loadMore, hasNextPage } = animeHook({
    selectedGenre,
    sortOrder,
    searchInput,
  });
  const skeletons = Array(10).fill(0);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={8}
        padding={5}
      >
        {animeArray.length > 0
          ? animeArray.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))
          : !loading && (
              <Text
                fontSize="2xl"
                color="gray.400"
                textAlign="center"
                width="100%"
              >
                No results found.
              </Text>
            )}
        {loading &&
          skeletons.map((_, index) => <LoadingSkeleton key={index} />)}
      </SimpleGrid>

      {hasNextPage && (
        <Flex justifyContent="flex-end" paddingX={10} paddingBottom={10}>
          <Button
            onClick={loadMore}
            isLoading={loading}
            variant="outline"
            _hover={{ bg: "gray.700" }}
          >
            Load More
          </Button>
        </Flex>
      )}
    </>
  );
};

export default AnimeGrid;
