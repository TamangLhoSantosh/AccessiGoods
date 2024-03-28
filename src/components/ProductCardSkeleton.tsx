import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";

const ProductCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width={600}>
      <Skeleton height={500}>
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default ProductCardSkeleton;
