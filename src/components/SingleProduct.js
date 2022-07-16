import React from 'react'
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { addToCart, removeFromCart, loadCurrentItem } from '../action/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleProduct = ({ cart, prod, addToCart, removeFromCart, loadCurrentItem }) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10, display: 'flex', flexDirection: 'column' }}>
            <span className='product-price'>$ {prod.price.split(".")[0]} </span>
            {prod.fastDelivery}
            <span>
              <Rating rating={prod.ratings} />
            </span>
            <div className='button-container'>
              {


                // <Button onClick = {() => addToCart(prod.id)}>
                // Add to Cart  
                // </Button>
                cart.find(p => p.id === prod.id) ? (
                  <Button onClick={() => removeFromCart(prod.id)}
                    variant="danger"
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    onClick={() => addToCart(prod.id)}
                    disabled={!prod.inStock}>
                    {!prod.inStock ? "Out of stock" : "Add to Cart"}
                  </Button>
                )

              }
              <Link to={`/detail/${prod.id}`}>

                <Button onClick={() => loadCurrentItem(prod)} variant="outline-secondary" className='Detail'>View Item</Button>{' '}
              </Link>
            </div>

          </Card.Subtitle>



        </Card.Body>
      </Card>
    </div>
  )
}

const mapDispatchToProp = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

const mapStatetoProps = (state) => {
  return {
    cart: state.shop.cart

  }
}
export default connect(mapStatetoProps, mapDispatchToProp)(SingleProduct);