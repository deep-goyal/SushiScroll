import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { value: "TITLE_ROMAJI", label: "Title" },
    { value: "START_DATE", label: "Start Date" },
    { value: "END_DATE", label: "End Date" },
    { value: "TRENDING", label: "Trending" },
    { value: "SCORE", label: "Ratings" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Title
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortval) => (
          <MenuItem key={sortval.value} value={sortval.value}>
            {sortval.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
