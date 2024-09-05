import { useState } from "react";
import ShippingForm from "../components/ShippingForm";
import { StyledCheckout } from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import PaymentCard from "../components/PaymentCard";
import PaymentSuccess from "../components/PaymentSuccess";

function Checkout() {
  const [active, setActive] = useState("shipping");
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);

  return (
    <StyledCheckout>
      {payment === false && (
        <div className="form">
          <header>
            <p
              onClick={() => setActive("shipping")}
              className={active === "shipping" && "active"}
            >
              Shipping
            </p>
            <p
              onClick={() => setActive("payment")}
              className={active === "payment" && "active"}
            >
              Payment
            </p>
          </header>
          {active === "shipping" ? <ShippingForm /> : <PaymentCard />}
          <div className="footer">
            <button onClick={() => navigate("/store")}>Return to store</button>
            {active === "shipping" ? (
              <button onClick={() => setActive("payment")}>Continue</button>
            ) : (
              <button onClick={() => setPayment(true)}>Pay</button>
            )}
          </div>
        </div>
      )}
      {payment && <PaymentSuccess />}
    </StyledCheckout>
  );
}

export default Checkout;
