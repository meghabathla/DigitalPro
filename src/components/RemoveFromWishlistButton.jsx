import { useSnackbar } from "../context/SnackbarContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/UserConetxt";
import { BsSuitHeartFill } from "react-icons/bs";

export const RemoveFronWishlistButton = ({ product }) => {
  const { removeFromWishlist } = useWishlist();
  const { showSnackbar } = useSnackbar();
  const { isAuthenticated } = useAuth();

  const handleOnClick = (e) => {
    e.stopPropagation();
    if (isAuthenticated) {
      removeFromWishlist(product);
    } else {
      showSnackbar("Login to remove product from the wishlist");
    }
  };

  return <BsSuitHeartFill onClick={handleOnClick} className="heart" />;
};
