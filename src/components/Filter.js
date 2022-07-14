import React from 'react'
import { Button, Form } from "react-bootstrap";
// import { cartState } from '../context/Context';
import Rating from './Rating';
import { connect } from 'react-redux';
import { filterByPrice } from '../action/action';

const Filter = ({ sort, product, filterByPrice,filteredProducts}) => {
    
    // const {productState:{ byStock, byFastDelivery,sort,byRating}, 
    // productDispatch} = cartState();
    return (
      <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name = "group 1"
                type="radio"
                id={`inline-1`}
                value = "lowToHigh"
                onChange={(e)=> product.filterByPrice(product.filteredProducts,e.target.value)

                }
                // checked = {sort === "lowToHigh" ? true: false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name = "group 1"
                type="radio"
                id={`inline-2`}
                
                // checked = {sort === "highToLow" ? true: false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Include Out of Stock"
                name = "group 1"
                type="radio"
                id={`inline-3`}
                // onChange={()=>

                // }
                // checked = {byStock}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name = "group 1"
                type="radio"
                id={`inline-4`}
                // onChange={()=>
                //     productDispatch({
                //             type: "FILTER_BY_DELIVERY",
                            
                //         })
                //     }
                //     checked = {byFastDelivery}
            />
        </span>
        <span>
           <label style={{paddingRight: 10}}>Rating: </label>
              <Rating 
                     //  rating={byRating}
                //       onClick={(i) => productDispatch({
                //       type: "FILTER_BY_RATING",
                //       payload: i+1,
                // })}
                      style = {{cursor: "pointer"}} />
      </span>
              <Button variant='light' 
                    // onClick={() =>
                    // productDispatch({
                    //     type: "CLEAR_FILTERS",
                    // })}
                    >
                      Clear Filter
              </Button>
    </div>
    )
}

// const mapDispatchToProp = dispatch =>{
//   return{
//     filterByPrice: (sort) => dispatch(filterByPrice(sort)),

//   }
// }

const mapStatetoProps = (state) =>{
 
  return {
    product: state.shop.product,
    sort: state.shop.sort,

  }
}

const mapDispatchToProp = dispatch => {
  return {
    filterByPrice: (product,sort) => dispatch(filterByPrice(product,sort)),
    
  }
} 





export default connect(mapStatetoProps,mapDispatchToProp)(Filter)