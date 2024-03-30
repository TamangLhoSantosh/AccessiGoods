import useCategories from "../hooks/useCategories";
import { Button, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const CategoriesList = ({ onSelectCategory }: Props) => {
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
    <List>
      {categories.map((category) => (
        <ListItem key={category}>
          <Button
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
  );
};

export default CategoriesList;
