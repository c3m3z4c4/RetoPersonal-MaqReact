import React from 'react'
import { Link } from 'react-router-dom'

import platillo from '../images/hotdog.png'
import platillo2 from '../images/pizza.png'

class Cart extends React.Component {
  render (){
    return (
      <div className="container">
        <div className="Cart-container">
        <span className="display-4 font-weight-light">My</span><br/>
        <span className="display-4 font-weight-bold">Cart List</span>  
        <div className="item__list  d-flex">
          <ul>
            <li>
              <div className="item flex-row justify-content-around">
                <img src={platillo} alt="Platillo elegido"/>
                <div className="info flex-column">
                  <span>Hotdog</span>
                  <p>$13.99</p>
                </div>
                <div className="controls flex-column">
                  <a href="/" className="btn btn-light">+</a>
                  <p>1</p>
                  <a href="/" className="btn btn-light">-</a>
                </div>
              </div>
            </li>
            <li>
              <div className="item flex-row justify-content-around">
                <img src={platillo2} alt="Platillo elegido"/>
                <div className="info flex-column">
                  <span>Pizza Slice</span>
                  <p>$30.40</p>
                </div>
                <div className="controls flex-column">
                  <button href="/" className="btn btn-light">+</button>
                  <p>1</p>
                  <button href="/" className="btn btn-light">-</button>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        <div className="total__cost">

        </div>
          <div className="d-flex justify-content-center"> 
            <Link to="/pay" type="button" className="btn btn-dark">Checkout</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;