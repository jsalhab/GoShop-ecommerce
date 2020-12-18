import { createSelector } from 'reselect';

const selectCart = state => state.cart;  // input selector 

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems ? cart.cartItems : []
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems ? cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    ): []
)

/*
A selector is a function that accepts Redux state as an argument and returns data that is derived from that state
*/