import { useNavigate } from "react-router-dom";
import { StyledPaymentSuccess } from "../styles/Styles";
import { useCartContext } from "../context/CartContext";

function PaymentSuccess() {
  const navigate = useNavigate();
  const { setCart } = useCartContext();
  return (
    <StyledPaymentSuccess>
      <p>Payment Successfull!</p>
      <button
        onClick={() => {
          navigate("/store");
          setCart([]);
        }}
      >
        Back to Store
      </button>
    </StyledPaymentSuccess>
  );
}

export default PaymentSuccess;
