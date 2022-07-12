import React from 'react';
import { cartState } from '../context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';
import { connect } from 'react-redux';
import { addToCart } from '../action/action';

const Home = ({ products }) => {

  return (
    
    <div className='home'>
      <Filter />
      <div className='productContainer'>

              {
                products && products.map(product => (
                  <SingleProduct prod ={product} key = {product.id}/>
                )
                
              )}

      </div>
    </div>
  )
}

const mapStatetoProps = (state) =>{
  return {
    products: state.shop.product

  }
}



export default connect(mapStatetoProps)(Home)