import React,{useState, useEffect} from 'react'
import { Badge, Button, Container,Dropdown,FormControl,Nav,Navbar } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { AiFillDelete } from 'react-icons/ai'
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Style.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../action/action'

const Header = ({cart,removeFromCart}) => {

  const [cartCount,setCartCount] = useState(0)

  useEffect(() =>{
    let count =0 ;
    cart.forEach(item =>{
      count += Number(item.qty)
    })

  

    setCartCount(count);
  },[cart, cartCount])
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
              // onChange={(e) => setSearchValue(e.target.value)}
            ></FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown className='custom_nav_link'>
              <DropdownToggle variant='success'>

                  <BsCartFill className='cartItemBox' color="white" fontSize="25px"/>   
                  
                  <Badge bg>{cartCount}</Badge>
                    
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
                          onClick={() => removeFromCart(prod.id)}  
                         
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

const mapStateToProps  =  state => {
  return{
    cart: state.shop.cart    
  }
}

const mapDispatchToProps  = dispatch =>{
  return{
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)