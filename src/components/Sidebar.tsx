import React from "react";
import useGenres from "../hooks/useGenres";
import { List, ListItem, Spinner, Text } from "@chakra-ui/react";

const Sidebar = () => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <List>
        {genres.map((genre, index) => (
          <ListItem key={index} paddingY={"5px"}>
            <Text fontSize={"lg"}>{genre}</Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
