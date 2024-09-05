import { StyledHeader } from "../styles/Styles";
import { Link } from "react-router-dom";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/UserConetxt";
import HeaderSignInBtn from "./HeaderSignInBtn";
import { SlUser } from "react-icons/sl";
import { BsSuitHeart } from "react-icons/bs";
import { useWishlist } from "../context/WishlistContext";

function Header() {
  const { cart } = useCartContext();
  const { isAuthenticated, user } = useAuth();
  const { wishlist } = useWishlist();


  return (
    <StyledHeader>
      <div>
        <Link to="/">DigitalPro</Link>
        <Link to="/store">Store</Link>
      </div>

      <div>
        <Link to="/wishlist">
          <span>
            <BsSuitHeart className="heart" />
            <p
              className="cartItemCount"
              style={{
                right: "-1.4rem",
              }}
            >
              {wishlist.length}
            </p>
          </span>
        </Link>
        <Link to="/cart">
          <span className="cart">
            <PiShoppingBagOpenLight className="cartIcon" />
            <p className="cartItemCount">{cart.length}</p>
          </span>
        </Link>

        {isAuthenticated ? (
          <Link to="/user">
            {user.avatar_url ? (
              <img
                style={{
                  height: "3.4rem",
                  width: "3.4rem",
                  borderRadius: "50%",
                  boxShadow: "0 0 5px #333",
                }}
                src={`${user.avatar_url}`}
                alt="userAvatar"
              />
            ) : (
              <Link to="/user">
                <SlUser />
              </Link>
            )}
          </Link>
        ) : (
          <HeaderSignInBtn />
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;
