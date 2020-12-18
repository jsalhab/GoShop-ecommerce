import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { placeOrder } from "../../redux/actions/checkoutAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/userSelectors";
import { selectCartItems } from "../../redux/selectors/cartSelector";
import CustomButton from "../custom-button/CustomButton";
import { withRouter } from "react-router-dom";
import "./Stripe.scss";

const StripeCheckoutButton = ({
  price,
  history,
  placeOrder,
  currentUser,
  cartItems,
}) => {
  const priceForStripe = price * 100; // change the price to cents
  const publishableKey =
    "pk_test_51HqNgkCGL1KSQk4n4IQhM61UQnCmlKPbpz30jQkM8usadZb2aoCow7rsrzsB8S8DuBNF7n45D26awtVzHFHLF0hJ001xSx7vlw";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        placeOrder(currentUser.id, cartItems);
        history.push("/order-success");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="PLACE ORDER"
      name="GoShop Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <div className="custom-button-container">
        <CustomButton className="custom-button">PLACE ORDER</CustomButton>
      </div>
    </StripeCheckout>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  placeOrder: (userId, cartItems) => dispatch(placeOrder(userId, cartItems)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
);
