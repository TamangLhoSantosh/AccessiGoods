import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={500}>
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default ProductCardSkeleton;
