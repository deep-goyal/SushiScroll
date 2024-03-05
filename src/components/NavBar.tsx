import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px 120px" padding="20px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
