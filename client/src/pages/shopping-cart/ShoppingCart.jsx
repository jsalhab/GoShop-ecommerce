import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import CustomButton from "../../components/custom-button/CustomButton";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelector";
import "./ShoppingCart.scss";

const ShoppingCart = ({ cartItems, total, history }) => {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="header-item">
          <span>Product</span>
        </div>
        <div className="header-item">
          <span>Description</span>
        </div>
        <div className="header-item">
          <span>Quantity</span>
        </div>
        <div className="header-item">
          <span>Price</span>
        </div>
        <div className="header-item">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="custom-button-container">
        <CustomButton
          className="custom-button"
          onClick={() => history.push("/check-out")}
        >
          PROCEED TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(ShoppingCart));
