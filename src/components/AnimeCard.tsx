import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useFetchAnime";
import AverageScore from "./AverageScore";

interface Props {
  anime: Anime;
}

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

const AnimeCard = ({ anime }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={anime.coverImage} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize="xl">{toTitleCase(anime.title)}</Heading>
          <AverageScore avgscore={anime.rating} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
