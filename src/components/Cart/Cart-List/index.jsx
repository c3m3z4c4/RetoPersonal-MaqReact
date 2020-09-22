import React from 'react'

import ListItem from '..//Cart-List-Item/index'
/* import platillo from '../../images/food/hotdog.png'
import platillo2 from '../../images/food/pizza.png' */

class CartList extends React.Component {
  render (){
    return (
      <div className="cartlist-container">
        <ListItem description="Hot Dog" price="$12.99" cantidad="1"/>
        <ListItem description="Hot Dog" price="$12.99" cantidad="1"/>
      </div>
    )
  }
}

export default CartList;