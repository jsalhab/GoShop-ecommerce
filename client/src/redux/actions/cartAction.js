import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_FROM_CART, QUICK_VIEW, HIDE_MODAL } from "../actions/types";

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN
    }

}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }

}

export const removeItemFromCart = (item) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: item
    }

}

export const removeItem = (item) => {
  return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const quickView = () => {
  return {
        type: QUICK_VIEW
    }
}

export const hideModal = () => {
  return {
        type: HIDE_MODAL
    }
}