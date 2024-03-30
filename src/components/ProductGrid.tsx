import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import GameCardContainer from "./ProductCardContainer";
import useProducts from "../hooks/useProducts";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = useProducts(productQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {isLoading &&
          skeleton.map((index) => (
            <GameCardContainer key={index}>
              <ProductCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((product) => (
          <GameCardContainer key={product.id}>
            <ProductCard product={product} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
