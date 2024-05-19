import { SunIcon } from "@chakra-ui/icons";
import { HStack, useColorMode } from "@chakra-ui/react";
import { LuMoon } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text> */}
      {colorMode === "light" ? (
        <SunIcon onClick={toggleColorMode} boxSize={10} paddingRight={4} />
      ) : (
        <HStack paddingRight={4}>
          <LuMoon onClick={toggleColorMode} size={25} />
        </HStack>
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
