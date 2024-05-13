import { SimpleGrid } from "@chakra-ui/react";
import animeHook from "../hooks/animeHook";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const animeArray = animeHook();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
      spacing={10}
      padding={10}
    >
      {animeArray.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
