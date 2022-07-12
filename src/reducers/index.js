import shopReducer from "./shop";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    shop: shopReducer,
    })
export default rootReducer;