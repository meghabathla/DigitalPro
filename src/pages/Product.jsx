import { Link, useParams } from "react-router-dom";
import useProducts from "../services/useProducts";
import ProductSlider from "../features/store/ProductSlider";
import { StyledProduct } from "../styles/Styles";
import ProductOperations from "../features/store/ProductOperations";
import { formatter } from "../utils/useCurrencyFormatter";
import { useWishlist } from "../context/WishlistContext";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useAuth } from "../context/UserConetxt";

function Product() {
  const searchParams = useParams();
  const products = useProducts();
  const { checkInWishlist, wishlist, addToWishlist, removeFromWishlist } =
    useWishlist();
  const { isAuthenticated } = useAuth();

  const [activeProduct] = products.filter(
    (product) => product.id == searchParams.productId
  );
  if (!activeProduct) {
    return null;
  }

  return (
    <StyledProduct>
      <ProductSlider productImages={activeProduct?.productImages} />
      <div className="productInfo">
        <p>{activeProduct?.name}</p>
        <header>
          <span>{activeProduct?.rating}</span>
          {checkInWishlist(activeProduct) ? (
            <BsSuitHeartFill
              onClick={() => removeFromWishlist(activeProduct)}
              className="heart"
            />
          ) : (
            <BsSuitHeart
              onClick={() => {
                if (isAuthenticated) {
                  addToWishlist(activeProduct);
                } else {
                  showSnackbar("Sign in to add product in the wishlist");
                }
              }}
              className="heart"
            />
          )}
        </header>
        <p>{formatter.format(activeProduct?.price)}</p>
        <ul>
          {activeProduct?.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <ProductOperations product={activeProduct} />
    </StyledProduct>
  );
}

export default Product;
