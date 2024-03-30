import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectCategory: (category: string) => void;
}

const CategorySelector = ({ onSelectCategory }: Props) => {
  const { categories, error } = useCategories();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginBottom={10}>
        Category
      </MenuButton>
      <MenuList>
        {categories.map((category) => {
          return (
            <MenuItem
              key={category}
              onClick={() => {
                onSelectCategory(category);
              }}
            >
              {category}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
