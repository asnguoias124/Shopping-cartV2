import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart } from '../action/action';
import Rating from './Rating';

const Detail = ({ curent, addToCart }) => {
  const {
    image = '',
    name = '',
    price = 0,
    ratings = 1,
    desc = '',
    fastDelivery = '',
    inStock = 0,
    id = '',
  } = curent || {};

  return (
  
    <div className="productscreen">
      <div className='productscreen__left'>
          <div className='left__image'>
            <img  src={image} alt="/" />
          </div>
          <div className="left__info">
            <p className="left__name">{name}</p>
            <p>Price:$ {price}</p>
            <p>{desc}</p>
          </div>

     </div>
      <div className='productscreen__right'>
        <div className='right__info'>
          <p>
                <span>Price:$ {price}</span>
          </p>
          <p>
                Status: 
                <span>
                  { `${inStock}` > 0 ? " In Stock" : " Out of Stock"}
                </span>
          </p>   
          <p><Rating rating={ratings} /></p>     
          <p>{fastDelivery ? "4 days Delivery" : "Fast Delivery"}</p>
          



        <p>
          <button type="button" onClick={() => addToCart(id)}>
            Add To Cart
          </button>

          </p>
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    curent: state.shop.currentItem,
  }
}

const mapDispatchToProp = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Detail)