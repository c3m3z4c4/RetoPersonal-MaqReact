import React from 'react'

import CashPayItem from './CashPayItem/index'

import mastercard from '../../../images/checkout/mcard.png'
import cash from '../../../images/checkout/cartera.png'
class CashPay extends React.Component {
 render() {
  return (
      <div className="container-item">
        <span className="container-item__title">Payment</span>        
          <CashPayItem image={mastercard} title="Mastercard" concept='**** 2318'></CashPayItem>
          <CashPayItem image={cash} title="Cash on Delivery"  concept="$ 54.49"></CashPayItem>
      </div>
    )
  }
}

export default CashPay;