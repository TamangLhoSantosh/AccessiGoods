import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const useProducts = (selectedCategory: string | null) =>
  useData<Product>("/products", { params: { category: selectedCategory } }, [
    selectedCategory,
  ]);
export default useProducts;
