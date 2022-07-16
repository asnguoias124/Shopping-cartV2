import React, {useState,useEffect} from 'react';
import SingleProduct from './SingleProduct';
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import Rating from './Rating';
import Header from './Header';


const Home = ({ products}) => {
  
  
  const [data,setData] = React.useState(products);
  const [ratings,setRatings] = useState(null);
  const [totalItem, setTotalItem] = useState(1)



  const filterByCategory = (catitem) =>{
    const result = products.filter((currData)=>{
      return currData.category === catitem;
      }
    
    );

    setData(result)
}


  const filterByPrice = (sortPrice) =>{
    let sortedPrice = [...products]

    sortedPrice.sort((a,b) => sortPrice === "lowToHigh"  ? a.price - b.price : b.price - a.price)

    setData(sortedPrice)
  }

  

  const filterByStock = (byStock) =>{
    let sortedStock = [...products]
    if(!byStock) 
    setData(sortedStock.filter((prod) => prod.inStock))
  }

  const filterByDelivery = (byDelivery) => { 
    const result = products.filter((currData)=>{
      return currData.fastDelivery === byDelivery;
      }
    
    );

    setData(result)

    
  }
  
  const filterByRating = (byRating) => {
    console.log(byRating.targ);
    setRatings(products.filter((prod) => prod.ratings >= byRating))
  }

  const clearFilter = () =>{
    const result = products
    setData(result)
  }
  
  const handleRating = (e) =>{
     setRatings(e.target.value)
  }

  
  
  return (
  
   
   
    <div className='home'>
      <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name = "group 1"
                type="radio"
                id={`inline-1`}
                value = 'lowToHigh'
                onChange={(e) => filterByPrice(e.target.value)}
                
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name = "group 1"
                type="radio"
                id={`inline-2`}
                value = "highToLow"
                onChange={(e) => filterByPrice(e.target.value)}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="In Stock"
                name = "group 1"
                type="radio"
                id={`inline-3`}
                onChange={() => filterByStock(products.inStock > 0 ? true : false)}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name = "group 1"
                type="radio"
                id={`inline-4`}
                onChange={() => filterByDelivery('Fast Delivery')}
            />
        </span>
        <span>
           <label style={{paddingRight: 10}}>Rating: </label>
              <Rating 
              rating = {ratings}
              style = {{cursor: "pointer"}}
              ratingValue = {ratings}
              onClick={(e) => setRatings(e.target.ratingValue) } />
      </span>
            <div className='catitem'>
                <Button variant='light' 
                    className='catitem-1'
                    onClick={()=> filterByCategory('Jeans')}
                      >
                        Jeans
                </Button>

                <Button variant='light' 
                    className='catitem-2'
                    onClick={()=> filterByCategory('T-shirt')}
                      >
                        T-shirt
                </Button>

                <Button variant='light' 
                    className='catitem-3'
                    onClick={()=> filterByCategory('Sandal')}
                      >
                        Sandal 
                </Button>

                <Button variant='light' 
                    className='catitem-4'
                    onClick={()=> filterByCategory('Shoes')}
                      >
                        Shoes 
                </Button>
            </div>

            <Button variant='light' className='clearFilter' onClick={() => clearFilter()}>Clear Filter</Button>
    </div>

      <div className='productContainer'>
          
              {
                data.map(product => (
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