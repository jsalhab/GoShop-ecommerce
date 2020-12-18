import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartAction";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/selectors/cartSelector";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
