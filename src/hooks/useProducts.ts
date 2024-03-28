import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
interface FetchProductResponse {
  count: number;
  products: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchProductResponse>("/products", { signal: controller.signal })
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { products, error, isLoading };
};

export default useProducts;
