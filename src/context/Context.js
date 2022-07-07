import { createContext, useContext, useReducer } from "react"
import React from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(200,200 , true),
        inStock: faker.helpers.arrayElement([0,2,3,4,5,9]),
        fastDelivery: faker.datatype.boolean(),
        ratings: Math.floor(Math.random() * 6)

    }));

    const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery:"",
    })
    
  return <Cart.Provider value={{state, dispatch, productState, productDispatch}} >{children}</Cart.Provider>;
}

export default Context

export const cartState= () =>{
  return useContext(Cart);
}