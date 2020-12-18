import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  removeItemFromCart,
} from "../../redux/actions/cartAction";

import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  removeItemFromCart,
  isCheckout,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item image" />
      </div>
      <span className="name">{name}</span>

      {!isCheckout ? (
        <span className="quantity">
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem(cartItem)}>
            &#10095;
          </div>
        </span>
      ) : (
        <span className="quantity">
          <span className="value">Qty:{quantity}</span>
        </span>
      )}

      <span className="price">${price}</span>
      {!isCheckout && (
        <div
          className="remove-button"
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10005;
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
