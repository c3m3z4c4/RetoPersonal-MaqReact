import React from 'react'

import './CashAddressItem.css'

class CashAddressItem extends React.Component {
 render() {
  return (
      <div className="container-item">
          <div className="item-Adrr">
            <div className="item-addr-text">
              <h4>{this.props.title}</h4>
              <span>{this.props.address}</span>
            </div>
            <div className="item-addr-select">
                <input type="checkbox" id="item-addr-select"/>
                <label for="item-addr-select"></label>
            </div>
          </div>
      </div>
    )
  }
}

export default CashAddressItem;