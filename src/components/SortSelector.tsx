import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "TITLE_ROMAJI", label: "Title" },
    { value: "START_DATE", label: "Start Date" },
    { value: "END_DATE", label: "End Date" },
    { value: "POPULARITY_DESC", label: "Popularity" },
    { value: "SCORE_DESC", label: "Ratings" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortVal) => sortVal.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortval) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortval.value)}
            key={sortval.value}
            value={sortval.value}
          >
            {sortval.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
