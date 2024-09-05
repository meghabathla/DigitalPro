import { useSnackbar } from "../context/SnackbarContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/UserConetxt";
import { BsSuitHeart } from "react-icons/bs";

export const AddToWishlistButton = ({ product }) => {
  const { addToWishlist } = useWishlist();
  const { showSnackbar } = useSnackbar();
  const { isAuthenticated } = useAuth();

  const handleOnClick = (e) => {
    e.stopPropagation();
    if (isAuthenticated) {
      addToWishlist(product);
    } else {
      showSnackbar("Login to add product in the wishlist");
    }
  };

  return <BsSuitHeart onClick={handleOnClick} className="heart" />;
};
