import React from 'react'
import { Link } from 'react-router-dom'

import CartList from './Cart-List/index'
import CartAmmount from './Cart-Ammount/index'

class Cart extends React.Component {
  render (){
    return (
      <div className="container">
        <div className="Cart-container">
          <span className="display-4 font-weight-light">My</span><br/>
          <span className="display-4 font-weight-bold">Cart List</span>  
        </div>
        <CartList description="Hot Dog" price="$12.99" cantidad="1"/>
        <CartAmmount />
        <div className="d-flex justify-content-center"> 
          <Link to="/pay" type="button" className="btn btn-dark">Checkout</Link>
        </div>
      </div>
    )
  }
}

export default Cart;