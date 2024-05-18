import React from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useFetchAnime";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card borderRadius={10}>
      <Image src={anime.coverImage} overflow="hidden" />
      <CardBody>
        <Heading fontSize="xl">{anime.title.toLocaleUpperCase()}</Heading>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
