import React from "react";
import { Product } from "../hooks/useProducts";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card marginBottom={3}>
      <Image src={product.thumbnail} height={300} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize={"2xl"}>{product.title}</Heading>
        <Text>{product.description}</Text>
        <Text fontSize={"xl"} fontWeight={"semibold"}>
          $ {product.price}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
