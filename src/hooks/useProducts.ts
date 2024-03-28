import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Product {
  id: number;
  title: string;
}
interface FetchProductResponse {
  count: number;
  products: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchProductResponse>("/products", { signal: controller.signal })
      .then((response) => setProducts(response.data.products))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);
  return { products, error };
};

export default useProducts;
