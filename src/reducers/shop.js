import * as actionTypes from '../action/types';
import products from './data';


const initialState = {
    product: products,// {id,name,price,image,inStock,fastDelivery,rating}
    cart: [],   // {id,name,price,image,inStock,fastDelivery,rating, qty}
    currentItem: null,
}


const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            //Get the items data from the products array
            const item = state.product.find(product => product.id === action.payload.id)
            //Check if the item is in the cart already
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            
            return {
                
                ...state,
                cart: inCart ? state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
                    : [...state.cart, { ...item, qty: 1 }]
            }
        }
        case actionTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        }

        case actionTypes.ADJUST_QTY: {
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: action.payload.qty }
                        : item
                )
            }
        }

        case actionTypes.LOAD_CURRENT_ITEM: {

            const item = state.product.find(product => product.id === action.payload.id)

            return {
                ...state,
                currentItem: action.payload,
            }
        }

        default:
            return state;
    }
    
};


export default shopReducer;