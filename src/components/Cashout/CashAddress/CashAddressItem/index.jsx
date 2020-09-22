import React from 'react'

import './CashAddressItem.css'

class CashAddressItem extends React.Component {
 render() {
  return (
      <div className="container-item">
          <div className="item-Adrr">
            <h4>{this.props.title}</h4>
            <span>{this.props.address}</span>
          </div>
          <div className="item-Sellectform-check">
              <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
          </div>
      </div>
    )
  }
}

export default CashAddressItem;