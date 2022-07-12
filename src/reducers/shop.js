import { faker } from '@faker-js/faker';
import * as actionTypes from '../action/types';

const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(200,200 , true),
    inStock: faker.helpers.arrayElement([0,2,3,4,5,9]),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.floor(Math.random() * 6)

}));

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
            const inCart = state.cart.find( (item) => item.id === action.payload.id ? true: false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => 
                    item.id === action.payload.id 
                        ? {...item, qty: item.qty +1 } 
                        : item
                    )
                : [...state.cart,{...item,qty:1}]
            }
        }
        case actionTypes.REMOVE_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter( item => item.id !== action.payload.id ),
            };
        }
        
        case actionTypes.ADJUST_QTY:{
            return {
                ...state,
                cart: state.cart.map(item => 
                    item.id === action.payload.id ? 
                    {...item,qty: action.payload.qty} : 
                    item )
            }
        }

        case actionTypes.LOAD_CURRENT_ITEM:{
            return{
                ...state,
                currentItem: action.payload,
            }
        }

        default:
            return state;
        }
    };

export default shopReducer;