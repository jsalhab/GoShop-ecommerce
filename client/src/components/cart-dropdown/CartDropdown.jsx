import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";
import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/actions/cartAction";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/shopping-cart");
        dispatch(toggleCartHidden());
      }}
    >
      VIEW CART
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
