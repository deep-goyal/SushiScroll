import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding="20px"
      marginBottom={5}
      spacing={5}
    >
      <Image src={Logo} boxSize="60px 120px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
