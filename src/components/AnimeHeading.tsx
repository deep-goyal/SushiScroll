import { Heading } from "@chakra-ui/react";

interface Props {
  genre: string;
}

const AnimeHeading = ({ genre }: Props) => {
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginBottom={5} paddingX={5}>
      {genre} Anime
    </Heading>
  );
};

export default AnimeHeading;
