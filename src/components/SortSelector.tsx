import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "POPULARITY_DESC", label: "Popularity" },
    { value: "TITLE_ROMAJI", label: "Title" },
    { value: "START_DATE_DESC", label: "Start Date" },
    { value: "END_DATE_DESC", label: "End Date" },
    { value: "SCORE_DESC", label: "Ratings" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortVal) => sortVal.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        backgroundColor="black.500"
        color="white"
        _hover={{ backgroundColor: "blue.600" }}
        _active={{ backgroundColor: "blue.700" }}
        leftIcon={<FaSort />}
      >
        {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortval) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortval.value)}
            key={sortval.value}
            value={sortval.value}
            backgroundColor={
              selectedOrder === sortval.value ? "blue.250" : "normal"
            }
            _hover={{ backgroundColor: "gray.100" }}
            _focus={{ backgroundColor: "gray.300" }}
          >
            {sortval.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
