import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} width={400}>
      {children}
    </Box>
  );
};

export default ProductCardContainer;
