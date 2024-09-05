import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useSnackbar } from "./SnackbarContext";

export const WishlistContext = createContext(null);

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);
  const { showSnackbar } = useSnackbar();
  const isFirstTimeLoading = useRef(true);

  useEffect(() => {
    if (isFirstTimeLoading.current) return;
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (isFirstTimeLoading.current) {
      const wishlistFromLocal = localStorage.getItem("wishlist");
      if (Boolean(wishlistFromLocal)) {
        const value = JSON.parse(wishlistFromLocal);
        setWishlist(value);
      } else {
        setWishlist([]);
      }
    }
    isFirstTimeLoading.current = false;
  }, []);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    showSnackbar("Product added to wishlist");
  };

  const checkInWishlist = (product) => {
    return wishlist.filter((p) => product.id).length;
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((p) => p.id !== product.id);
    setWishlist(updatedWishlist);
    showSnackbar("Product removed from wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        checkInWishlist,
        setWishlist,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
