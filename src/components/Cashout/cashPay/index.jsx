import React from 'react'

import CashAddressItem from './CashPayItem/index'

import mastercard from '../../../images/checkout/mcard.png'
import cash from '../../../images/checkout/cartera.png'
class CashAddress extends React.Component {
 render() {
  return (
      <div className="container-item">
        <span className="container-item__title">Payment</span>        
          <CashAddressItem image={mastercard} title="Mastercard" concept='**** 2318'></CashAddressItem>
          <CashAddressItem image={cash} title="Cash on Delivery"  concept="$ 54.49"></CashAddressItem>
      </div>
    )
  }
}

export default CashAddress;