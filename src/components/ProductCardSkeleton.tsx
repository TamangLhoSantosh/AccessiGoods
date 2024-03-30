import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={400}>
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default ProductCardSkeleton;
