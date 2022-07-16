import React, { useMemo } from 'react';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../action/action';
import Rating from './Rating';


const Cart = ({ cart, removeFromCart, adjustQty }) => {

  const totalItem1 = useMemo(() => {
    return cart.reduce((state, payload, index) => {
      state.amount += 1;
      state.price += payload.price * payload.qty;

      return state;
    }, {
      amount: 0,
      price: 0
    })

  }, [cart])

  return (
    <div className='home'>
      <div className='productContainer'>

        <ListGroup>
          {

            cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}> <Image src={prod.image} alt={prod.name} fluid rounded /></Col>
                  <Col md={2}><span>{prod.name}</span></Col>
                  <Col md={2}>$ {prod.price}</Col>
                  <Col md={2}><Rating rating={prod.ratings} /></Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prod.qty || 1}
                      onChange={(e) => adjustQty(prod.id, e.target.value)}
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant='light'
                      onClick={() => removeFromCart(prod.id)}
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>

                  </Col>
                </Row>

              </ListGroup.Item>
            ))


          }
        </ListGroup>

      </div>
      <div className='filters'>
        <span className="title">Subtotal ({totalItem1.amount}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {totalItem1.price}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
