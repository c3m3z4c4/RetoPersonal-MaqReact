import React from 'react'
import { Link } from 'react-router-dom'


import platillo from '../images/hotdog.png'

const CashOut = () => {
  return (
    <div className="container">
      <div className="cashout-container">
        <h1>Time to pay</h1>
          <div className="d-flex justify-content-around">
            
            <button type="button" className="btn btn-dark">Place Order</button>
          </div>
      </div>
    </div>
  )
}

export default CashOut;