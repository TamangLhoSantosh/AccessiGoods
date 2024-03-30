import { Heading } from "@chakra-ui/react";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const CategoryHeading = ({ productQuery }: Props) => {
  const heading = productQuery.category
    ? productQuery.category
    : "All Products";
  return (
    <Heading as="h2" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default CategoryHeading;
