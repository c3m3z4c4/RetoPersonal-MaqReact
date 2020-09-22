import React from 'react'

import './CashPayItem.css'

class CashPayItem extends React.Component {
 render() {
  return (
      <div className="container-item">
          <div className="item-Adrr">
            <img src={this.props.image} alt=""/>
            <h4>{this.props.title}</h4>
            <span>{this.props.concept}</span>
          </div>
          <div className="item-Sellectform-check">
              <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
          </div>
      </div>
    )
  }
}

export default CashPayItem;