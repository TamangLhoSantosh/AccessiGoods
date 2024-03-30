import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const useProducts = () => useData<Product>("/products");
export default useProducts;
