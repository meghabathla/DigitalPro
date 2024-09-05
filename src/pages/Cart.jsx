import React from "react";
import { StyledCart } from "../styles/Styles";
import { useCartContext } from "../context/CartContext";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { formatter } from "../utils/useCurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserConetxt";
import { useSnackbar } from "../context/SnackbarContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    cartTotal,
  } = useCartContext();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const { isAuthenticated } = useAuth();

  return (
    <StyledCart>
      {cart.map((product) => (
        <div className="cartProductCard" key={product.id}>
          <img
            src={product.productImages[0]}
            onClick={() => navigate(`/store/${product.id}`)}
          />
          <h2 onClick={() => navigate(`/store/${product.id}`)}>
            {product.name}
          </h2>
          <p>{formatter.format(product.price * product.quantity)}</p>
          <div className="quantityButton">
            <button onClick={() => decreaseProductQuantity(product)}>
              <FiMinus />
            </button>
            <button>{product.quantity}</button>
            <button onClick={() => increaseProductQuantity(product.id)}>
              <GoPlus />
            </button>
          </div>
          <button
            className="crossCartButton"
            onClick={() => removeFromCart(product.id)}
          >
            <RxCross2 />
          </button>
        </div>
      ))}
      <div className="cartCheckout">
        <p>{formatter.format(cartTotal)}</p>
        <button
          onClick={() => {
            if (isAuthenticated) {
              navigate("/checkout");
            } else {
              showSnackbar("Please sign-in to checkout!");
            }
          }}
        >
          Checkout
        </button>
      </div>
    </StyledCart>
  );
}

export default Cart;
