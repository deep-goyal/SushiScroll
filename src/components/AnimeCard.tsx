import React from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/animeHook";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card borderRadius={10}>
      <Image src={anime.coverImage} overflow="hidden" />
      <CardBody>
        <Heading fontSize="2xl">{anime.title.toLocaleUpperCase()}</Heading>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
