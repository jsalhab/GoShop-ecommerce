import React from "react";
import { connect } from "react-redux";
import StripeCheckoutButton from "../../components/stripe-button/Stripe";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelector";
import "./Checkout.scss";

const Checkout = ({ cartItems, total }) => {
  return (
    <div>
      <div className="checkout-page">
        <h1>Review Your Order</h1>
        <h3>Please review your order information before placing your order.</h3>
        <h1>Shopping Cart</h1>
        {cartItems.map((cartItem) => (
          <CheckoutItem
            isCheckout={true}
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))}
        <div className="total">TOTAL: ${total}</div>
        <div className="test-warning">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
      </div>
      );
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
