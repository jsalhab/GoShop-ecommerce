import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_FROM_CART, PLACE_ORDER_START, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILURE, QUICK_VIEW, HIDE_MODAL } from "../actions/types";
import {addItemToCart, removeItemFromCart} from '../../utilies/cartUtiles';

const INITIAL_STATE = {
    hidden: true,
    orderPlaced: false,
    cartItems: [],
    showModal: false
}


const cartReducer = (state = INITIAL_STATE, action) => {

   switch (action.type) {
       case TOGGLE_CART_HIDDEN:
           
           return {
               ...state,
               hidden: !state.hidden
           }
        case ADD_ITEM: 
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload )
        }

        case REMOVE_ITEM_FROM_CART: 
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
        }

        case REMOVE_ITEM: 
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }

        case PLACE_ORDER_START:
           
           return {
               ...state,
           }

        case PLACE_ORDER_SUCCESS:   

        return {
            ...state,
            cartItems: [],
            orderPlaced: true
        }
        
        case PLACE_ORDER_FAILURE:

        return {
            ...state,
            errorMessage: action.payload
        }

        case QUICK_VIEW:

        return {
            ...state,
            showModal: true
        }

        case HIDE_MODAL:

        return {
            ...state,
            showModal: false
        }
   
       default:
           return state;
   }
}

export default cartReducer;