import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import Rating from './Rating';
import Header from './Header';


const Home = ({ products, search = '' }) => {

  const [productList, setProductList] = useState(products);
  const [state, setState] = useState({
    isChecked: false
  })

  useEffect(() => {
    const filterList = products.filter(p => p.name.includes(search));
    setProductList(filterList)
  }, [search])

  const onCheck = () => {
    setState((prev) => ({
      ...prev,
      isChecked: !prev.isChecked
    }))
  }


  return (
    <div className='home'>
      <div className='filters'>
        <span className='title'>Filter Products</span>
        <div>
          <input
            type="checkbox"
            checked={state.isChecked}
            style={{ marginRight: '10px' }}
            onChange={onCheck}
          />
          <span>check</span>
        </div>
      </div>

      <div className='productContainer'>

        {
          productList.map(product => (
            <SingleProduct prod={product} key={product.id} />
          )

          )}

      </div>

    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    products: state.shop.product,

  }
}



export default connect(mapStatetoProps)(Home)