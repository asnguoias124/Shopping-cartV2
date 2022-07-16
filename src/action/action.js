import * as actionTypes from './types'
import productReducer from '../reducers/filter'

export const addToCart = (itemId) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQty = (itemId, value) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }    
    }
}

export const loadCurrentItem = (item) =>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const filterByPrice = (products, sort) =>{
   
    // if(sort !== ''){
    //     products.sort((a,b) => (sort === "lowToHigh")  ? 
    //     (a.price > b.price ? 1: -1) : 
    //     (a.price < b.price ? 1: -1))
    // } else {
    //     products.sort((a,b) => (a.id > b.id ? 1:-1));
    // }


    return{
        type: actionTypes.FILTER_BY_PRICE,
        payload: 
        {
            sort: sort,
            items: products
        } 
    }
}

export const filterByStock = (itemId) =>{
    return{
        type: actionTypes.FILTER_BY_STOCK,
        payload: {
            id: itemId
        }
    }
}

