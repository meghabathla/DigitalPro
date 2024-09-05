import { useState } from "react";
import { StyledPaymentCard } from "../styles/Styles";

function PaymentCard() {
  return (
    <StyledPaymentCard>
      <div>
        <input type="radio" name="payment" />
        <label>Debit/Credit Card</label>
        <img src="./card.svg" alt="card" />
      </div>
      <div>
        <input type="radio" name="payment" />
        <label>UPI</label>
        <img src="./upi.png" alt="upi" />
      </div>
      <div>
        <input type="radio" name="payment" />
        <label>Paypal </label>
        <img src="./pp.png" alt="paypal" />
      </div>
      <div>
        <input type="radio" name="payment" />
        <label>Cash on Delivery </label>
        <img src="./cod.png" alt="cod" style={{ height: "6rem" }} />
      </div>
    </StyledPaymentCard>
  );
}

export default PaymentCard;
