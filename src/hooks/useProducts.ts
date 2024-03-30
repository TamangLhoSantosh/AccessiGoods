import { ProductQuery } from "../App";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const useProducts = (productQuery: ProductQuery) =>
  useData<Product>(
    productQuery.category
      ? `product/category/${productQuery.category}`
      : "product",
    {
      params: {
        products: productQuery.searchText,
        category: productQuery.category,
      },
    },
    [productQuery]
  );
export default useProducts;
