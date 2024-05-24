import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Anime } from "../hooks/useFetchAnime";
import AverageScore from "./AverageScore";
import { Link } from "react-router-dom";

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
    <Card
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "md",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <Link to={`/anime/${anime.id}`}>
        <Image src={anime.coverImage} />
        <CardBody>
          <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
            <Heading
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                transition: "text-decoration 0.3s",
              }}
            >
              {toTitleCase(anime.title)}
            </Heading>
            <AverageScore avgscore={anime.rating} />
          </HStack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default AnimeCard;
