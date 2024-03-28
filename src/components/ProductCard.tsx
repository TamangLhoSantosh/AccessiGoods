import React from "react";
import { Product } from "../hooks/useProducts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card height={500}>
      <Image src={product.thumbnail} height={400} />
      <CardBody>
        <Heading fontSize={"2xl"}>{product.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
