import React from 'react'
import discountImg from '../../../images/checkout/rebaja.png';
import './cartAmmount.css'


class CartAmmount extends React.Component {
  render (){
    return (
      < div className="cartAmmount-container">
        <div className="discount"> 
          <img src={discountImg} className='discountLogo'  alt="Discouunt Logo"/><p className='discountText' > Do you have any discouunt code?</p>
        </div>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>$ 44.39</span>
        </div>
        <hr className="dashed"/>
        <div className="total">
          <span>total</span>
          <span>$ 44.39</span>
        </div>
      </div>
    )
  }
}

export default CartAmmount;