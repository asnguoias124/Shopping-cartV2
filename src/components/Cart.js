import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { cartState } from '../context/Context';
import Rating from './Rating';
import { connect } from 'react-redux';
import { removeFromCart } from '../action/action';


const Cart = ({cart, removeFromCart}) => {

  const [totalItem ,setTotalItem] = useState(0)
  const [totalPrice ,setTotalPrice] = useState(0)


  useEffect(() =>{
    let count =0 ;
    let price = 0;
    cart.forEach(item =>{
      count += item.qty
      price += item.price * item.qty
    })

    setTotalItem(count);
    setTotalPrice(price);
  },[cart, totalItem, totalPrice, setTotalItem, setTotalPrice])


  return (
  <div className='home'>
    <div className='productContainer'>
    
      <ListGroup>
        {
                      
          cart.map((cart) => (
             <ListGroup.Item key = {cart.id}>
              <Row>
                <Col md={2}> <Image src={cart.image} alt={cart.name} fluid rounded/></Col>
                <Col md={2}><span>{cart.name}</span></Col>
                <Col md={2}>$ {cart.price}</Col>
                <Col md={2}><Rating rating={cart.ratings}/></Col>
                <Col md={2}>
                <Form.Control
                    as="select"
                    value={cart.qty}                   
                  >
                    {[...Array(cart.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button 
                    type="button"
                    variant='light'       
                    onClick={() => removeFromCart(cart.id)}        
                  >
                    <AiFillDelete fontSize="20px"/>
                  </Button>
                  
                </Col>
              </Row>

            </ListGroup.Item>
          ))
      
         
          }
      </ListGroup>
      
    </div>
    <div className='filters'>
      <span className="title">Subtotal ({totalItem}) items</span>
      <span style={{fontWeight:700, fontSize: 20}}>Total: $ {totalPrice}</span>
      <Button type="button" disabled={cart.length === 0}>
        Proceed to Checkout
      </Button>
    </div>
  </div>
  )
}

const mapStateToProps = state =>{
  return{
    cart: state.shop.cart,
  }
}

const mapDispatchToProps  = dispatch =>{
  return{
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
