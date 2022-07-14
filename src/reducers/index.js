import shopReducer from "./shop";
import { combineReducers } from "redux";
import productReducer from "./filter";

const rootReducer = combineReducers({
    shop: shopReducer, 
    product: productReducer,

    })
export default rootReducer;