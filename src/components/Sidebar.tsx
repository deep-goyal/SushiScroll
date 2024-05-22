import useGenres from "../hooks/useGenres";
import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string;
}

const Sidebar = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <List>
        {genres.map((genre, index) => (
          <ListItem key={index} paddingY={"5px"}>
            <Button
              fontSize={"lg"}
              variant={"link"}
              fontWeight={genre === selectedGenre ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
