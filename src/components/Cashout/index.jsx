import React from 'react'
import CashAddress from './CashAddress/index'
import CashPay from './cashPay/index'


const CashOut = () => {
  return (
    <div className="container">
      <div className="cashout-container">
          <CashAddress></CashAddress>
          <br/>
          <CashPay></CashPay>
          <div className="d-flex justify-content-around">
            <div>
              <span>Total</span><br/>
              <span>$ 44.39</span>
            </div>
            <button type="button" className="btn btn-dark">Place Order</button>
          </div>
      </div>
    </div>
  )
}

export default CashOut;