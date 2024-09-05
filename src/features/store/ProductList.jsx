import { useSearchParams } from "react-router-dom";
import useProducts from "../../services/useProducts";
import { StyledProductList } from "../../styles/Styles";
import ProductCard from "./ProductCard";

function ProductList() {
  const [searchParams] = useSearchParams();
  const products = useProducts();
  const filterValue = searchParams.get("category") || "all";
  const sortValue = searchParams.get("price") || "all";
  const brandValue = searchParams.get("brand") || "all";
  const ratingValue = searchParams.get("rating") || "";
  const rangeValue = searchParams.get("range") || "all";

  const getFilteredProducts = (categoryFilter, products) => {
    if (categoryFilter === "all") return products;
    return products.filter((product) => product.category === categoryFilter);
  };

  let filteredProducts = getFilteredProducts(filterValue, products);

  if (sortValue === "h2l") filteredProducts.sort((a, b) => b.price - a.price);
  else if (sortValue === "l2h")
    filteredProducts.sort((a, b) => a.price - b.price);

  if (brandValue !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === brandValue
    );
  }

  if (ratingValue) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= ratingValue
    );
  }

  return (
    <StyledProductList>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
