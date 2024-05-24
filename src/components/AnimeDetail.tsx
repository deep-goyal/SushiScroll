import { Box, Image, Text, Heading } from "@chakra-ui/react";
import useDetail from "../hooks/useDetail";

const AnimeDetail = () => {
  const anime = useDetail();

  if (anime == undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box>
      <Heading as={"h1"} id="mainheading" fontSize={"8xl"} whiteSpace="nowrap">
        Sushi Scroll
      </Heading>
      <Heading>{anime.title}</Heading>
      <Image src={anime.coverImage} alt={anime.title} />
      <Text>{anime.description}</Text>
      {anime.trailerid && anime.platform && (
        <Box>
          {anime.platform === "youtube" ? (
            <iframe
              title="Trailer"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${anime.trailerid}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : anime.platform === "dailymotion" ? (
            <iframe
              title="Trailer"
              width="560"
              height="315"
              src={`https://www.dailymotion.com/embed/video/${anime.trailerid}`}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Unsupported platform</p>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AnimeDetail;
