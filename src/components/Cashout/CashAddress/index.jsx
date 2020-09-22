import React from 'react'

import CashAddressItem from './CashAddressItem/index'

class CashAddress extends React.Component {
 render() {
  return (
      <div className="container-item">
          <CashAddressItem title="Home" address='NY, United States 300 Post Street 1222422'></CashAddressItem>
          <CashAddressItem title="Office" address="3891 Ranchview Dr. Richardson, California 62639"></CashAddressItem>
      </div>
    )
  }
}

export default CashAddress;