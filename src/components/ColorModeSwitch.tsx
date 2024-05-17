import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

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
        <MoonIcon onClick={toggleColorMode} boxSize={10} paddingRight={4} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
