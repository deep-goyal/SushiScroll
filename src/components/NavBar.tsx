import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="15px">
      <Image src={Logo} boxSize="60px 120px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
