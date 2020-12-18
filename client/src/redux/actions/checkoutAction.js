import { PLACE_ORDER_START, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILURE} from "../actions/types";
import {firestore} from "../../firebase/firebase.utiles";

export const placeOrder = (userId, checkoutItems) => async dispatch => {
    dispatch({type: PLACE_ORDER_START})
    const items = checkoutItems.map(item => {
        return {
        product: {
          title: item.name,
          imageUrl: item.imageUrl,
          price: item.price
        },
        quantity: item.quantity,
        totalPrice:
          item.price * item.quantity
      };
    });

    firestore.collection("orders").add({
      userId: userId,
      items: items
    }).then (res => {
       dispatch({type: PLACE_ORDER_SUCCESS})
    }).catch (error => {
       dispatch({type: PLACE_ORDER_FAILURE, payload: error.message})
    }) 
    
};
