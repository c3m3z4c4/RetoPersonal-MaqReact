import React from 'react'

import CashAddressItem from './CashPayItem/index'

class CashAddress extends React.Component {
 render() {
  return (
      <div className="container-item">
        <h3>Payment</h3>
        <br/>
          <CashAddressItem image="imagen" title="Mastercard" concept='**** 2318'></CashAddressItem>
          <CashAddressItem image="imagen" title="Cash on Delivery"  concept="$ 54.49"></CashAddressItem>
      </div>
    )
  }
}

export default CashAddress;