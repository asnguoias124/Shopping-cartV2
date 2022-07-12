import React from 'react'
import {Card, Button} from 'react-bootstrap';
import Rating from './Rating';
import { cartState } from '../context/Context';
import { useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { addToCart } from '../action/action';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const SingleProduct = ({ prod, addToCart}) => {

    
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom: 10}}>
                    <span>$ {prod.price.split(".")[0]}</span>
                       
                    <div>Fast Delivery</div>
                       
                            
                    <Rating rating={prod.ratings}/>
                    {
                    
                          
                            <Button onClick = {() => addToCart(prod.id)}>
                            Add to Cart  
                            </Button>
                        
                    }    
                   <Link to="/Detail" className='Detail'>
                        
                        <Button variant="outline-secondary" className='Detail'>View Detail</Button>{' '}
                    </Link>
                    
                </Card.Subtitle>
                
                
                
            </Card.Body>
        </Card>
    </div>
  )
}

const mapDispatchToProp = dispatch =>{
    return{
      addToCart: (id) => dispatch(addToCart(id)),
    }
  }

export default connect (null,mapDispatchToProp)(SingleProduct);