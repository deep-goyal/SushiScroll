import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (input: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding="20px"
      marginBottom={5}
      spacing={10}
      wrap="nowrap"
      overflow="hidden"
    >
      <Heading as={"h1"} id="mainheading" fontSize={"8xl"} whiteSpace="nowrap">
        Sushi Scroll
      </Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
