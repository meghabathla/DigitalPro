import Star from "../../components/Star";
import { formatter } from "../../utils/useCurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { AddCartButton } from "../../components/AddCartButton";
import { StyledProductCard } from "../../styles/Styles";
import { AddToWishlistButton } from "../../components/AddToWishlistButton";
import { RemoveFronWishlistButton } from "../../components/RemoveFromWishlistButton";
import { useWishlist } from "../../context/WishlistContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const isInWishlist = wishlist.filter((p) => p.id === product.id).length;

  const goToProductPage = () => {
    navigate(`/store/${product.id}`);
  };

  return (
    <StyledProductCard>
      <div className="productCardImage" onClick={goToProductPage}>
        <img src={product.productImages[0]} alt={product.name} />
      </div>

      <div className="productCardInfo">
        <p>{product.name}</p>
        <main>
          <span>
            {product.rating}
            <Star rating={product.rating} />
          </span>
          <p>{formatter.format(product.price)}</p>
          {isInWishlist ? (
            <RemoveFronWishlistButton product={product} />
          ) : (
            <AddToWishlistButton product={product} />
          )}
        </main>
        <AddCartButton product={product} />
      </div>
    </StyledProductCard>
  );
}
