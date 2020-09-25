import React from 'react'

import platillo from '../../../images/food/hotdog.png'
//import platillo2 from '../../images/food/pizza.png'
import '../Cart-List-Item/CardListItem.css'

class Orden extends React.Component {
 render() {
  return (
      <div className="container-item">
        <div className="item">
          <div className="item-img">
            <img src={platillo} width="80px" alt="platillo seleccionado"/>
          </div>
          <div className="item-desc">
            <span className="Item-desc__title">{this.props.description}</span>
            <span>{this.props.price}</span>
          </div>
          <div className="cantidad">
            <button type="button" className="item-controls">-</button>
            <div className=""> <p className="item-cuantity"> {this.props.cantidad} </p></div>
            <button type="button" className=" item-controls">+</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Orden;
