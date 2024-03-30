import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import GameCardContainer from "./ProductCardContainer";
import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const { data, error, isLoading } = useProducts();

  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading &&
          skeleton.map((index) => (
            <GameCardContainer>
              <ProductCardSkeleton key={index} />
            </GameCardContainer>
          ))}
        {data.map((product) => (
          <GameCardContainer>
            <ProductCard key={product.id} product={product} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
