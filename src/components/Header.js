import React from 'react'
import { Badge, Button, Container,Dropdown,FormControl,Nav,Navbar } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { AiFillDelete } from 'react-icons/ai'
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cartState } from '../context/Context'
import './Style.css';

const Header = () => {

    const {state:{cart},
    dispatch,
    productDispatch,
  } = cartState();
  return (
    <Navbar bg="dark" variant="dark" style= {{height:80}}>
        <Container className='container'>
          <Navbar.Brand>
            <Link to="/" className='headerName'>Clothing-store</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl
              style ={{width: 500}}
              placeholder='Search the products'
              className='m-auto'
              onChange={(e) =>{
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }}
            ></FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown className='custom_nav_link'>
              <DropdownToggle variant='success'>

                  <BsCartFill className='cartItemBox' color="white" fontSize="25px"/>   
                  
                  <Badge bg>{cart.length}</Badge>
                    
              </DropdownToggle>
              
              <Dropdown.Menu style={{minWidth: 350}}>

                {cart.length > 0 ? (
                  <>
                    {
                      cart.map(prod =>(
                        <span className='cartitem' key={prod.id}>
                          <img
                            src={prod.image}
                            className="cartItemImg"
                            alt={prod.name}
                          />
                          <div className='cartItemDetail'>
                            <span>{prod.name}</span>
                            <span> ${prod.price.split(".")[0]}</span>
                          </div>
                        <AiFillDelete 
                          fontSize="20"
                          style={{cursor:"pointer"}}
                          onClick={() => 
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })}
                        />
                        </span>
                      ))}
                      <Link to="/cart">
                          <Button style={{ width: "95%", margin: "0 10px" }}>
                            Go To Cart
                          </Button>
                      </Link>
                  </>
                ): (
                  <span style={{padding:10}}>Cart is empty</span>
                )}

                
              </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Container>
        
    
    </Navbar>
    
  )
}

export default Header