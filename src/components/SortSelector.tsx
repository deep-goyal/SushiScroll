import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Title
      </MenuButton>
      <MenuList>
        <MenuItem>Title</MenuItem>
        <MenuItem>Start Date</MenuItem>
        <MenuItem>End Date</MenuItem>
        <MenuItem>Trending</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
