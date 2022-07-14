import React from 'react';
import Filter from './Filter';
import SingleProduct from './SingleProduct';

import { connect } from 'react-redux';


const Home = ({ products }) => {

  const transformProducts = () =>{
    let sortedProducts = products;

    return sortedProducts;
  }

  return (
    
    <div className='home'>
      <Filter />
      <div className='productContainer'>

              {
                products.map(product => (
                  <SingleProduct prod ={product} key = {product.id}/>
                )
                
              )}

      </div>
    </div>
  )
}

const mapStatetoProps = (state) =>{
  return {
    products: state.shop.product,
   
  }
}



export default connect(mapStatetoProps)(Home)