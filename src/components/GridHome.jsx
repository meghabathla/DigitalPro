import useProducts from "../services/useProducts.js";
import { StyledGrid } from "../styles/Styles.js";
function GridHome() {
  const products = useProducts();

  return (
    <StyledGrid>
      {products.map(
        (product) =>
          product?.productBanner && (
            <img src={product.productBanner} key={product.id} alt="image" />
          )
      )}
    </StyledGrid>
  );
}

export default GridHome;
