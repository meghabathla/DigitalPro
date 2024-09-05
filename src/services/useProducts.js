import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

function useProducts() {
  const [fetchError, setFetchError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        setFetchError(error);
        setProducts([]);
        console.error(
          `API ERROR:: fetchProducts: Could not fetch the products`,
          error
        );
      } else if (data) {
        setProducts(data);
        setFetchError(null);
      }
    };
    fetchProducts();
  }, []);

  return products;
}

export default useProducts;
