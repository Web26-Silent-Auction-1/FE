import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_lfWw5902jucKcL4cZEmo1voD00PhPKnenF";
  const onToken = (token) => {
    const amount = priceForStripe;
    axios
      .post(`https://bw-silent-auction-1.herokuapp.com/api/payments`, {
        amount,
        token,
      })
      .then((response) => {
        alert("Payment Sucessful");
      })
      .catch((error) => {
        alert(
          "There was as issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Silent Auction"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
