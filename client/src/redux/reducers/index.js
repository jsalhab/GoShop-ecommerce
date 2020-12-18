import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import checkoutReducer from "./checkoutReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']   // reducer name
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory : directoryReducer,
    shop: shopReducer,
    checkout: checkoutReducer
});

export default persistReducer(persistConfig, rootReducer);
