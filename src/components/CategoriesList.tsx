import useCategories from "../hooks/useCategories";
import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const CategoriesList = ({ selectedCategory, onSelectCategory }: Props) => {
  const capitalizeAndRemoveDash = (str: string): string => {
    const words = str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(" ");
  };

  const { categories, error, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginY={4}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category} paddingY={1}>
            <Button
              whiteSpace={"normal"}
              textAlign={"left"}
              fontWeight={category === selectedCategory ? "bold" : "normal"}
              onClick={() => {
                onSelectCategory(category);
              }}
              fontSize={"lg"}
              variant={"link"}
            >
              {capitalizeAndRemoveDash(category)}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoriesList;
