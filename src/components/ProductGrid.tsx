import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import useProducts from "../hooks/useProducts";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = useProducts(productQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
      {isLoading &&
        skeleton.map((index) => (
          <ProductCardContainer key={index}>
            <ProductCardSkeleton />
          </ProductCardContainer>
        ))}
      {data.map((product) => (
        <ProductCardContainer key={product.id}>
          <ProductCard product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
