import React from 'react'

import './CashPayItem.css'

class CashPayItem extends React.Component {
 render() {
  return (
      <div className="container-item">
           
           <div className="item-pay">
            <span>{this.props.title}</span>
            <div className="item-pay__detail">
              <div className="item-pay-text">
                <img className="item-pay-img " src={this.props.image} alt="Pay Method"/>
                <span>{this.props.concept}</span>
              </div>
              <div className="item-pay-select">
                  <input type="checkbox" id="item-pay-select"/>
                  <label for="item-pay-select"></label>
              </div>
            </div>
          </div>
 
      </div>
    )
  }
}

export default CashPayItem;