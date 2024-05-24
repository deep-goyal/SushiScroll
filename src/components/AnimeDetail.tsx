import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
  Flex,
  useBreakpointValue,
  VStack,
  keyframes,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import useDetail from "../hooks/useDetail";

// Define keyframes for the zoom animation
const zoomInOut = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  `;

const AnimeDetail = () => {
  const anime = useDetail();
  const headingFontSize = useBreakpointValue({
    base: "4xl",
    md: "6xl",
    lg: "8xl",
  });

  if (anime == undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <VStack align="left" padding={5}>
      <HStack spacing={10}>
        <Link to="/">
          <IconButton
            icon={<ChevronLeftIcon boxSize={8} />}
            aria-label="Back to List"
            bg="transparent"
            mb={4}
          />
        </Link>

        <Heading as="h1" fontSize={headingFontSize} mb={4} id="mainheading">
          Sushi Scroll
        </Heading>
      </HStack>

      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ lg: "flex-start" }}
        justifyContent="flex-start"
        width="100%"
      >
        <Box flex="1" textAlign="left" paddingX={{ base: 0, lg: 10 }}>
          <Heading
            as="h2"
            fontSize="5xl"
            mb={4}
            pb={10}
            pt={5}
            paddingLeft={20}
          >
            {anime.title}
          </Heading>
          {anime.trailerid && anime.platform && (
            <Box
              mt={4}
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="100%"
              borderRadius="md"
              overflow="hidden"
            >
              <VStack align="left" paddingX={20}>
                {anime.platform === "youtube" ? (
                  <iframe
                    title="Trailer"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${anime.trailerid}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <iframe
                    title="Trailer"
                    width="560"
                    height="315"
                    src={`https://www.dailymotion.com/embed/video/${anime.trailerid}`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                )}
                <Text
                  mt={4}
                  lineHeight="tall"
                  fontSize="lg"
                  textAlign="left"
                  paddingTop={10}
                >
                  {anime.description}
                </Text>
              </VStack>
            </Box>
          )}
        </Box>
        <Box
          maxWidth={{ base: "100%", lg: "40%" }}
          ml={{ lg: 4 }}
          animation={`${zoomInOut} 20s infinite`}
        >
          <Image
            src={anime.coverImage}
            alt={anime.title}
            borderRadius="md"
            paddingRight={20}
          />
        </Box>
      </Flex>
    </VStack>
  );
};

export default AnimeDetail;
