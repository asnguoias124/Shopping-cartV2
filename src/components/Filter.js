import React, {useState} from 'react'
import { Button, Form } from "react-bootstrap";
// import { cartState } from '../context/Context';
import Rating from './Rating';
import { connect } from 'react-redux';
import { filterByPrice } from '../action/action';

const Filter = ({  product}) => {
    
    // const {productState:{ byStock, byFastDelivery,sort,byRating}, 
    // productDispatch} = cartState();

   

// const mapDispatchToProp = dispatch =>{
//   return{
//     filterByPrice: (sort) => dispatch(filterByPrice(sort)),

//   }
// }

const mapStatetoProps = (state) =>{
 
  return {
    product: state.shop.product,

  }
}





export default connect(mapStatetoProps)(Filter)